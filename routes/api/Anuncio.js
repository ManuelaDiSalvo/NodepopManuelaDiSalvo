const anuncios= require('../../models/anuncios');


anuncios.find((err, Anuncio) => {
    console.log(Anuncio);
})

const mongoose = require('mongoose');


const anuncioSchema = new mongoose.Schema({
    nombre: { type: String, index: true },
    venta: { type: Boolean, index: true },
    precio: { type: Number, index: true },
    foto:{ type: String, index: true },
    tags:[{type: String, enum: ['work', 'lifestyle', 'motor', 'mobile']}],
});

anuncioSchema.statics.lista = function(filtro, skip, limit, fields, sort) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec()
}

anuncioSchema.statics.tags = function () {
    const query = Anuncio.find().distinct('tags');
    return query.exec();
}



var Anuncio = mongoose.model('Anuncio', anuncioSchema);



module.exports = Anuncio;
