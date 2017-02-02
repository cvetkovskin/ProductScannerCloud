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

function check(user,pass){
    var res = false;

    data.forEach(function(entry){
        if(entry.user === user && entry.passv=== pass){
            res=true;
        }
    });

    return res;
}

function apiRoute() {
  var api = new express.Router();
  api.use(cors());
  api.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  api.get('/validate', function(req, res) {
    var user = req.query.user;
    var pass = req.query.pass;

    var res = false;

    data.forEach(function(entry){
        if(entry.user === user && entry.passv=== pass){
            res=true;
        }
    });
    
    res.json(res);
  });

  return api;
}

module.exports = apiRoute;
