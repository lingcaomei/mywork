/**
 * Created by Window 7 on 2015/11/26.
 */
var express=require('express');
var app=express();
var bodyParse=require('body-parser');//解析请求体的中间件

app.use(express.static(__dirname));//使用静态文件服务

//两个解析规则不一样
//app.use(bodyParser.urlencoded({ extended: false }))//接受form请求
app.use(bodyParse.json());//接受json请求 启用（使用）bodyParse中间件 .json()取决于传过来的数据是json格式 res.body

//路由
app.post('/user/add',function(req,res){
    console.log(req.body)
    console.log(req)
    res.end('ok')
})

app.listen(8900);//监听