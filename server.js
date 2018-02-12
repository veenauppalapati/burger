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

app.listen(PORT, function(){
    console.log("Listening to : "+ PORT);
})