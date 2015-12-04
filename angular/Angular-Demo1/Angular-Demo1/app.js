var express = require("express");
var app = express();
var user = require("./user.js");
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/user',user);
app.use(express.static(__dirname + '/static'));

app.listen(8900);