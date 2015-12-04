/**
 * Created by Window 7 on 2015/11/18.
 */
var app=angular.module('app',[]);
app.controller('loginForm',function($scope,$http){
    $scope.userInfo={}
    $scope.getFormData=function() {
        console.log($scope.userInfo)
    }
    $scope.setFormData=function(){
        $scope.userInfo={
            email:'88888888@126.com',
            password:'123456aaa',
            loginauto:true
        }
    }
    $scope.saveFormData=function(){
        $http.post('/user/add',$scope.userInfo)
            .success(function(data){
                console.log($scope.userInfo);
                alert(data)
            }).error(function(err){
                alert(err)
            })
    }
})