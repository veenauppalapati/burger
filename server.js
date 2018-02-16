var express = require('express');
var bodyParser = require ('body-parser');
var methodOverride = require('method-override');
var exphb = require('express-handlebars');


var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({extended:false}));
apps.use(bodyParser.json());

app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Use Handlebars to render the main index.html page with the todos in it.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM plans;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { plans: data });
    });
  });
  
  // Create a new todo
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
  
  // Retrieve all todos
  app.get("/todos", function(req, res) {
    connection.query("SELECT * FROM plans;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
    });
  });

app.listen(PORT, function(){
    console.log("Listening to : "+ PORT);
});
