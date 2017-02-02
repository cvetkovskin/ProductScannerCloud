var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var collection = [
      {
        user: 'nik',
        pass: 'php'
      },
      {
        user: 'adam',
        pass: 'java'
      }
    ];

function productsRoute() {
  var products = new express.Router();
  products.use(cors());
  products.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  products.all('/', function(req, res) {
    console.log(new Date(), 'In /products POST / req.body=', req.body);  
    var user = req.body.user;
    var pass = req.body.pass;

    var test = false;

    collection.forEach(function(entry){
        if(entry.user == user && entry.pass == pass){
            test=true;
        }
    });
    
    res.json({result: test});
  });

  return products;
}

module.exports = productsRoute;
