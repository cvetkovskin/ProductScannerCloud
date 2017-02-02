var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
 var data = [
      {
        user: 'nik',
        pass: 'php'
      },
      {
        user: 'adam',
        pass: 'java'
      }
    ];


function apiRoute() {
  var api = new express.Router();
  api.use(cors());
  api.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  api.get('/validate', function(req, res) {
   
    
    res.json(data);
  });

  return api;
}

module.exports = apiRoute;
