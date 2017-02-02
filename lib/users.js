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
    console.log(new Date(), 'In /users/validate route POST / req.query=', req.body);  
    var user = req.body.user;
    var pass = req.body.pass;

    var test = false;

    data.forEach(function(entry){
        if(entry.user == user && entry.pass == pass){
            test=true;
        }
    });
    
    res.json({result: test});
  });

  return users;
}

module.exports = usersRoute;
