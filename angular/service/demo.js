(function(){
    'use strict'
    angular.module('app',[])
        .value('realname','gogo')
        .value('realname','张三')//是可以改变值的
        .constant('http','www.baidu.com')
        .constant('http','www.sohu.com')//不可以改变值 常量
        .controller('myCtrl',function($scope,realname,http){
            $scope.msg='';
            $scope.realname=realname;
            $scope.http=http;
            alert('刚刚')
        })
})();

