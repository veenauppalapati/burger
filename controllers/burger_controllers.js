var express = require("express");

var router = express.Router();

//Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// create a get route
router.get('/', function(req, res){

  burger.all("burgers", function(data){
    var database_object = {
      burgers:  data 
    }
     res.render('index', database_object);
  })
  
});

router.post('/burger', function(req, res){
  var valueName = "'"+ req.body.name + "'";
  console.log(valueName);
  burger.insert('burgers', ['burger_name', 'devoured'], [valueName, 0],function(data){
    res.json(data);
  });
})
module.exports = router;