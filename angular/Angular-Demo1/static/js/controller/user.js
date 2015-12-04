app.controller('userListController',function(UserService,$scope){

	$scope.filter = {
		userName: ''
	};
	$scope.users=[];

	var getData=function(){
		$scope.users=UserService.getUsers($scope.filter.userName,function(data){
			
			if(data){
				var len=data.length;
				for (var i = 0; i <len; i++) {
					data[i].type=data[i].type==1?'企业':'用户';
				}
				$scope.users=data;
			}

		},function(error){
			
		})
	}

	$scope.search = function() {
		getData();
	}

	getData();

	$scope.addNewUser = function() {
		$scope.$emit('newUser');
	}


})


app.service('UserService',function($http){

	var _this=this;
	_this.getUsers=function(name,success,fail){

		$http.get('/user?action=get&filter='+name)
			.success(function(data,status){
				if(data){
					success(data)
				}else{
					fail(null)
				}
			}).error(function(data,status){
				fail(null)
			})
	}
})
