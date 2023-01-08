const mongoose = require('mongoose');

const Anuncios = require('./models/anuncios');

const anuncios = new Annuncio({
    nombre:'Bicicleta',
    venta: true,
    precio: 230.15,
    foto: "/images/bici.jpeg",
});

nuevoAnuncio.save((error) => {
    if(error) {
        console.log('Hubo un error al guardar el anuncio:', error);
       
    } else {
        console.log('El anuncio se ha guardado correctamente')
        
    }
});