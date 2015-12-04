/**
 * Created by Window 7 on 2015/11/26.
 */
var app=angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'./home.html',
        controller:'homeCtrl'
    }).when('/list',{
        templateUrl:'./list.html',
        controller:'listCtrl'
    })
})

app.controller('homeCtrl',function($scope){
    $scope.name='这是我的主页面哦';
})
app.controller('listCtrl',function($scope){
    $scope.list=[
        {name:'javascript',demand:'熟练'},
        {name:'jquery',demand:'熟练'},
        {name:'html',demand:'熟练'},
        {name:'css',demand:'熟练'},
        {name:'html5',demand:'熟练'},
        {name:'css3',demand:'熟练'},
        {name:'nodejs',demand:'熟练'},
        {name:'sass',demand:'熟练'},
        {name:'reactjs',demand:'熟练'},
        {name:'ionic',demand:'熟练'},
    ]
})