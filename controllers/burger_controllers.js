var express = require("express");

var router = express.Router();

//Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.post('/burger', function(req, res){
    function()
})

app.post("/todos", function(req, res) {
    connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new todo
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });