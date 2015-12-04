app.controller('NewUserController', function($scope, $http) {
	$scope.user = {
		userName: '',
		password: '',
		type: '2'
	};

	$scope.error = {};


	$scope.save = function() {
		$http.post("/user?action=save", $scope.user)
			.success(function(data, status) {
				if(data == true) {
					$scope.$emit('user');
				}
				else {
					$scope.error.msg = 'save failed';
				}
				
			}).error(function(data, status) {
				$scope.error.msg = 'network error';
			});
	}
	$scope.cancel = function() {
		$scope.$emit('user');
	}
});