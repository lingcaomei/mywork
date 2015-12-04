var app=angular.module('penging',[]);
app.controller('IndexController',function($scope){

	$scope.containerUrl='login.html';
	$scope.$on('login',function(){
		$scope.containerUrl='main.html';
	})



})