app.controller('MainController',function($scope, $uibModal, $log) {
	$scope.url='user.html';
	$scope.navToUser = function() {
		$scope.url='user.html';
	}
	$scope.navToSetting = function() {
		$scope.url='setting.html';
	}

	$scope.$on("newUser",function(event, data) {
		$scope.url='new-user.html';
	})

	$scope.$on("user",function(event, data) {
		$scope.url='user.html';
	})
});
