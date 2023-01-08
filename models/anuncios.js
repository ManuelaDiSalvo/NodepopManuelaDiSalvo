const mongoose = require('mongoose');


const anuncioSchema = new mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto:String,
    tags:[String],
});

anuncioSchema.statics.lista = function(filtro) {
    const query = Anuncio.find(filtro);
    return query.exec()
}



var Anuncio = mongoose.model('Anuncio', anuncioSchema);



module.exports = Anuncio;
