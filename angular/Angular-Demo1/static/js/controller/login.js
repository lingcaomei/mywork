app.controller('LoginController',function($scope,$http,$rootScope){

	$scope.userInfo={
		userName:'',
		password:''
	}

	$scope.error = {};
	$scope.login=function(){
		$http.post('/user?action=login',$scope.userInfo)
			.success(function(data,status){
				if(data==true){
					$rootScope.loginUser={userName:$scope.userInfo.userName};
					$scope.$emit('login');
				}else{
					$scope.error.msg='user name or password incorrect';
				}
			}).error(function(data,status){

			})
	}

})
