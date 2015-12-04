/**
 * Created by Window 7 on 2015/12/4.
 */

var express=require('express');
var app=express();
var bodyParser=require('body-parser');


app.use(express.static(__dirname));
console.log(__dirname)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//当客户端发过来（发起的请求url）的路径是/user时 就走这个路由 返回数据 数组
app.get('/user',function(req,res){
    return res.json([
        {name:'莉莉',age:22},
        {name:'晨晨',age:23},
        {name:'晓丽',age:22},
        {name:'敏敏',age:26},
    ])

})


app.listen(8002);