var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    res.locals.bienvenida = 'Welcome';
    
    console.log(req.cookies);
  });

  module.exports = router;