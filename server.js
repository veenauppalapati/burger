var express = require('express');
var bodyParser = require ('body-parser');
var methodOverride = require('method-override');
var exphb = require('express-handlebars');


var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('/public'))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.engine('handlebars', exphb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controllers.js')
app.use(router);
app.listen(PORT, function(){
    console.log("Listening to : "+ PORT);
});
