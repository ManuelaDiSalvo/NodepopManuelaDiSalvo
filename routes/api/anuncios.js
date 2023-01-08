const connectMongoose = require('../../Mongoose/connectMongoose');
const Anuncio = require('../../models/anuncios');

const express = require('express');
const createError = require('http-errors');

const router = express.Router();


router.get('/', async (req, res, next) => {
  try {      
      
      const nombre = req.query.nombre;
      const minprecio=parseInt(req.query.minprecio);
      const precio=parseInt(req.query.precio);
      const masprecio=parseInt(req.query.masprecio);
      const rango = req.query.rango; 
      const tags = req.query.tags;
      const venta = req.query.venta;
      const skip = parseInt(req.query.skip); 
      const limit = parseInt(req.query.limit); 
      const fields = req.query.fields; 
      const sort = req.query.sort; 

      const filtro = {};

    if(nombre) {
      filtro.nombre = nombre;
    }

    if(minprecio){filtro.precio={"$gte": minprecio};}
    if(precio){filtro.precio=precio;} 
    if(masprecio){ filtro.precio={"$lte": masprecio};} 
    if(rango) 
    {
        
        switch(rango)
            {
            case "a": filtro.precio= {"$gte":10 ,"$lte":50};  ;break; 
            case "b": filtro.precio={"$gte":10}  ;break; 
            case "c": filtro.precio={"$lte":50}  ;break; 
            case "d": filtro.precio=50  ;break;       
            }
    }

    if (venta) {
    filtro.venta = venta;
  }
    if (tags) {
      filtro.tags = tags
    }

    const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
    res.json({results: anuncios});
  } catch(err) {
    next(err);
  }
});
  
router.get('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
  
      
      const anuncio = await Anuncio.findById(id);
  
      res.json({ result: anuncio });
  
    } catch (err) {
      next(err);
    }
  });


router.put('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
      const anuncioData = req.body;
  
      const anuncioActualizado = await Anuncio.findOneAndUpdate({ _id: id}, anuncioData, {
        new: true 
      });
  
      res.json({ result: anuncioActualizado });
  
    } catch (err) {
      next(err);
    }
  });

  
router.post('/', async (req, res, next) => {
    try {
  
      const anuncioData = req.body;
  
      
      const anuncio = new Anuncio(anuncioData);
  
      
      const anuncioGuardado = await anuncio.save();
  
      res.json({ result: anuncioGuardado });
  
    } catch (err) {
      next(err);
    }
  });

  
router.delete('/:id', async (req, res, next) => {
    try {
  
      const id = req.params.id;
  
      const anuncio = await Anuncio.findById(id);
  
      if (!anuncio) {
       
        return next(createError(404));
      }
  
      await Anuncio.deleteOne({ _id: id });
  
      res.json();
  
    } catch (err) {
      next(err);
    }
  });

module.exports = router;