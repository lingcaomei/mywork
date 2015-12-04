app.controller('UserController', function(UserService, $scope) {
	$scope.filter = {
		userName: ''
	};

	$scope.users = [];

	var getData = function() {
		$scope.users = UserService.getUsers($scope.filter.userName, function(data) {
			$scope.users = data;
		}, function(error) {

		});
	}

	$scope.search = function() {
		getData();
	}

	getData();

	$scope.addNewUser = function() {
		$scope.$emit('newUser');
	}
});

app.service('UserService', function($http) {
	var _self = this;

	_self.getUsers = function(name, success, fail) {
		$http.get("/user?action=get&filter="+name)
			.success(function(data, status) {
				if (data) {
					success(data);
				} else {
					fail(null);
				}

			}).error(function(data, status) {
				fail(null);
			});
	}
});