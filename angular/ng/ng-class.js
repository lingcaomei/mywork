var app=angular.module('app',[]);
app.controller('state',function($scope){
    $scope.err=false;
    $scope.warning=false;
    $scope.isErr=function(){
        $scope.err=true;
        $scope.warning=false;
        $scope.msg='This is an error!';
    }
    $scope.isWarn=function(){
        $scope.err=false;
        $scope.warning=true;
        $scope.msg='Just a warning . Please carry on.';
    }
})/**
 * Created by Window 7 on 2015/11/20.
 */
