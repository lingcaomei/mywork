(function(){
    'use strict'
    angular.module('app',[])
        .controller('myCtrl',function($scope){
            $scope.msg='';
            $scope.user={name:'',psw:''};
            $scope.err='';
            $scope.reverse=function(){
                return $scope.msg.split('').reverse().join('');
            }
            $scope.login=function(){
                console.log($scope.user)
                if($scope.user.name=='admin' && $scope.user.psw=='123'){
                    alert('登陆成功！')
                }else{
                    $scope.err='用户或密码错误'
                }
            }
        })
})()