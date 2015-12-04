app.controller('mainController',function($scope){
	$scope.containerUrl='user-list.html';

	$scope.navUser=function(){
		$scope.containerUrl='user-list.html';
	}
	$scope.navPersonal=function(){
		$scope.containerUrl='personal-list.html';
	}

	$scope.$on("newUser",function() {
		$scope.containerUrl='newUser.html';
	})

	$scope.$on("user",function() {
		$scope.containerUrl='user-list.html';
	})
})