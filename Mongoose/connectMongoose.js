const mongoose = require('mongoose')
mongoose.set('debug', true);

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
  console.log('Error de connexion a MongoDB', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('Connectado a MongoDB en', mongoose.connection.name);
});

mongoose.connect('mongodb://127.0.0.1/Nodepop');

module.exports = mongoose.connection;