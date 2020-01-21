//npm install express body-parser ejs ejs-mate mongoose --save

var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();

//setup engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//setup midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//home
app.get('/', function(req, res, next){
    res.render('home', {
        name: 'joko'
    });
});

app.get('/about', function(req, res, next){
    res.render('about');
});

//server
app.listen(3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server running in port 3000");
    }
})