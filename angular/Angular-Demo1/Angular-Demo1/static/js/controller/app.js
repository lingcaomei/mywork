var app = angular.module('penging', ['ui.bootstrap','ngCookies']);

app.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
}]);

