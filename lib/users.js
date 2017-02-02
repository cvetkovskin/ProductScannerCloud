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

function usersRoute() {
  var users = new express.Router();
  users.use(cors());
  users.use(bodyParser());

  // GET REST endpoint - query params may or may not be populated
  users.post('/validate', function(req, res) {
    var user = req.query.user;
    var pass = req.query.pass;

    var res = false;

    data.forEach(function(entry){
        if(entry.user === user && entry.pass === pass){
            res=true;
        }
    });
    
    res.json({result: res});
  });

  return users;
}

module.exports = usersRoute;
