var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var $fh = require('fh-mbaas-api');


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
  users.all('/validate', function(req, res) {
    console.log(new Date(), 'In /users/validate route POST / req.body=', req.body);  
    var user = req.body.user;
    var pass = req.body.pass;


    var options = {
        "act": "list",
        "type": "user_base", // Entity/Collection name
        "eq": {
            "user": user,
            "pass": pass
        }
    };

    $fh.db(options, function (err, data) {
        if (err) {
            console.error("Error " + err);
        } else {
            console.log('Printing the data:  ');
            console.log(JSON.stringify(data));
            if(data.count){
                res.json({result: true});
            }else{
                res.json({result: false});
            }
        }
    });
    
  });

  users.all('/signup', function(req, res) {
    console.log(new Date(), 'In /users/signup route POST / req.body=', req.body);  
    var user = req.body.user;
    var pass = req.body.pass;


    var options = {
        "act": "create",
        "type": "user_base", // Entity/Collection name
        "fields": {
            "user": user,
            "pass": pass
        }
    };

    $fh.db(options, function (err, data) {
        if (err) {
            console.error("Error " + err);
            res.json({result: false});
        } else {
            console.log('Printing the result of sign up:  ');
            console.log(JSON.stringify(data));
            res.json({result: true});
        }
    });
    
  });

  return users;
}

module.exports = usersRoute;
