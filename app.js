var express = require ('express');
var app = express();

app.set ('view engine', 'ejs');


app.get('/', function (req, res){
	res.send("<html><body> Portal de notícias <body></html>")

})