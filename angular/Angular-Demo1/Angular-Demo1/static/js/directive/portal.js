app.directive('pgPortal', function(){
	// Runs during compile
	
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		 scope: {
		 	pgPortal:'@',
		 	pgTitle:'@'
		 }, // {} = isolate, true = child, false/undefined = no change
		 controller: function($scope, $element, $attrs, $transclude) {
		 	$scope.myProperty = 'my property';
		 },
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		 template: '<div><div ng-transclude></div><div>{{pgPortal}}</div><div>{{pgTitle}}</div><div>information</div></div>',
		// templateUrl: '',
		 replace: true,
		 transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
});