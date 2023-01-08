#Nodepop

Deploy:

```sh
npm install
```

Start the app in development:

```sh
npm run dev
```

#Parámetros pasados en la query:


nombre Texto por el que comienza el nombre de los artículos a mostrar.

venta Indica si es un artículo que se quiere vender(venta=true) o si se quiere comprar(venta=false).

precio Precio con rangos y sin[precio_minimo]-[precio_maximo].

tags Muestra los anuncios que contengan la etiqueta o etiquetas indicadas.

limit Número de registros a listar.


#API documents

GET /api/anuncios

Anuncios list:
{"results":[{"_id":"63ba8eb425bba6a4842a17bc","nombre":"Bicicleta","venta":true,"precio":230.15,"foto":"https://res.cloudinary.com/dm1osozti/image/upload/v1672770012/samples/bike.jpg","tags":["lifestyle","motor"]},{"_id":"63ba8eb425bba6a4842a17bd","nombre":"iPhone 3GS","venta":false,"precio":50,"foto":"https://res.cloudinary.com/dm1osozti/image/upload/v1672835919/14557_ac9d33a0-3df5-4bda-917c-a5805cca5838_mc0muw.webp","tags":["lifestyle","mobile"]},


PUT para actualizar los anuncios (Anuncio.findOneAndUpdate);
POST para añadir nuevo anuncio (new Anuncio);
DELETE para eliminar un anuncio (Anuncio.deleteOne);

