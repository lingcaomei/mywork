var express = require("express");
var app = express();
var user = require("./user.js");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))//接受form请求
app.use(bodyParser.json())//接受json请求


app.use('/user',user);
app.use(express.static(__dirname + '/static'));


app.listen(8900);


