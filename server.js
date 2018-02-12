var express = require('express');
var bodyParser = require ('body-parser');
var methodOverride = require('method-override');

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended:false}));
apps.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("Listening to : "+ PORT);
})