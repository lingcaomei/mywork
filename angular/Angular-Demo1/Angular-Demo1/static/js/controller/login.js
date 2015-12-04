app.controller('LoginController', function($scope, $http, $rootScope) {
	$scope.loginInfo = {
		userName: '',
		password: ''
	};

	$scope.error = {};

	$scope.login = function() {
		$http.post("/user?action=login", $scope.loginInfo)
			.success(function(data, status) {
				if(data == true) {
					$rootScope.loginUser = {userName: $scope.loginInfo.userName};
					$scope.$emit('login');
				}
				else {
					$scope.error.msg = 'user name or password incorrect';
				}
				
			}).error(function(data, status) {
				$scope.error.msg = 'network error';
			});
	}
});