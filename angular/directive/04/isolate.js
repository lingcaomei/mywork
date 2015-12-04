/**
 * Created by Window 7 on 2015/12/3.
 */

//指令之间scope互不影响
/**
 * 1、创建独立scope,指令之间相互独立，互不影响
 */

var app=angular.module('app',[]);

app.directive('girl',function(){

    return {
        restrict:'E',
        template:'<div><input type="text" ng-model="username"/><span>{{username}}</span></div>',
        replace:true,
        scope:{} //创建独立scope 此作用域只针对该单独指令内
    }
})

app.controller('cityCtrl',function($scope){
    $scope.city="深圳";
})
app.directive('iPerson',function(){
    return {
        restrict:'E',
        template:'<div>{{Zcity}}</div>',
        replace:true,
        scope:{
            //将当前的属性作为字符串传给scope
            Zcity:'@iName'//-->得到的是 指令上属性cityName 的值 ，而该值正是控制器上的city的值
        }
    }
})
