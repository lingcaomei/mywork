##diretive 作用
    ####把一段html封装成一个组件

##diretive 总感

var app = angular.module('app', []);

app.directive('directiveName', function($inject) {

   return {
   　　template: '<div>内容<div ng-transclude></div></div>',

   　　replace: false,

   　　transclude: true,//把自定义子元素 复制过来

   　　restrict: 'E',//限定这个指令写在哪个位置能生效 E: 元素element A:attribute 属性 C：class 样式类 M：注释类 <!-- directive:holle -->

   　　scope: { ... },//独立的作用域，不干扰

      controller: function($scope, $element){ .... },

   　  compile: function(tElement, tAttrs, transclude) {
   　　　　return {
   　　　　　　pre: function preLink(scope, iElement, iAttrs, controller) { ... },
   　　　　　　post: function postLink(scope, iElement, iAttrs, controller) { ... }
   　　　　}
   　　},

   　　link: function(scope, iElement, iAttrs) { ... }
   };
});
