const mongoose = require('mongoose');
const connectMongoose = require('../Mongoose/connectMongoose');
const Anuncio = require('../models/anuncios');

async function initDb(){
    try{
        Anuncio.collection.drop((err, delOK) => {
            if(err) throw err;
            if(delOK) console.log("La colección se borró");
        })

        var anuncios = [
            {
                "nombre": "Bicicleta",
                "venta": true,
                "precio": 230.15,
                "foto": "https://res.cloudinary.com/dm1osozti/image/upload/v1672770012/samples/bike.jpg",
                "tags": [ 'lifestyle', 'motor' ]
            },
            {
                "nombre": "iPhone 3GS",
                "venta": false,
                "precio": 50,
                "foto": "https://res.cloudinary.com/dm1osozti/image/upload/v1672835919/14557_ac9d33a0-3df5-4bda-917c-a5805cca5838_mc0muw.webp",
                "tags": [ 'lifestyle', 'mobile' ]
            },
            {
                "nombre": "MacBookAir",
                "venta": true,
                "precio": 1200,
                "foto": "https://res.cloudinary.com/dm1osozti/image/upload/v1672836580/mac_bzo2tl.jpg",
                "tags": [ 'lifestyle', 'work' ]
            },
            {
                "nombre": "Mouse",
                "venta": false,
                "precio": 10,
                "foto": "https://res.cloudinary.com/dm1osozti/image/upload/v1672836802/mouse_yp2w0f.jpg",
                "tags": [ 'lifestyle', 'work' ]
            },
            
        ]
        
        Anuncio.collection.insertMany(anuncios, (err,result) => {
            console.log(result.insertedCount + " anuncios insertados");
            connectMongoose.close();
        })

    } catch(error){
        console.error(error);
    }
}

initDb();