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

    var test = false;

    var options = {
        "act": "list",
        "type": "myFirstEntity", // Entity/Collection name
    };

    $fh.db(options, function (err, data) {
  if (err) {
    console.error("Error " + err);
    res.json({result: false});
  } else {
    console.log('Printing the data:  ');
    console.log(JSON.stringify(data));
    res.json({result: true});
    /* Sample output
      {
        "fields": {
          "address1": "22 Blogger Lane",
          "address2": "Bloggsville",
          "country": "Bloggland",
          "fistName": "Joe",
          "lastName": "Bloggs",
          "phone": "555-123456"
        },
        "guid": "4e563ea44fe8e7fc19000002",
        "type": "myFirstEntity"
      }
    */
  }
});

    // data.forEach(function(entry){
    //     if(entry.user == user && entry.pass == pass){
    //         test=true;
    //     }
    // });

    // res.json({result: test});
  });

  return users;
}

module.exports = usersRoute;
