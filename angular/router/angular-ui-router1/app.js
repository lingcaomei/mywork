//var myApp = angular.module("myApp", [&apos;ui.router&apos;]);

var myApp = angular.module('myApp', ['ui.router']);

//初始化状态函数 angular 加载完成运行的第一个方法
myApp.run(function($rootScope){
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,formParams,formState){
        //需要登陆之后才能跳转
        if(toState.needLogin){
            //如果没有用户名（在登录成功后，将用户名赋值给$rootScope）
            //if(!$rootScope.username){
            //    alert('你还没有的登陆');
            //    event.preventDefault();//阻止默认事件 跳转
            //    return;//跳出
            //}
        }
        $rootScope.current=toState.name;
        console.log(toState.name)
    })
})
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/pageTab");

    $stateProvider
        .state("pageTab", {
            url: "/pageTab",
            templateUrl: "pageTab.html"
        })
        .state("pageTab.page1", {
            url:"/page1",
            templateUrl: "page1.html"
        })
        .state("pageTab.page2", {
            url:"/page2",
            templateUrl: "page2.html"
        })
        .state("pageTab.page3", {
            url:"/page3",
            templateUrl: "page3.html",
            needLogin:true
        })


});