/**
 * Created by Window 7 on 2015/12/3.
 */

//怎么在指令上调用控制器上的方法 可以定义相同的属性 然后绑定（赋值）不同的方法

var app=angular.module('app',[]);

app.controller('personCtrl1',function($scope){
    $scope.hobby='购物';
    $scope.shopping=function(){
        alert('喜欢'+$scope.hobby)
    }
    $scope.eat=function(){
        alert('喜欢吃')
    }
})

app.controller('personCtrl2',function($scope){
    $scope.hobby='旅游';
    $scope.travel=function(){
        alert('喜欢'+$scope.hobby)
    }
    $scope.eat=function(){
        alert('喜欢吃a')
    }
})

app.directive('person',function(){
    return {
        restrict:'E',
        template:'<div><div ng-transclude></div><span like="eat()">另外</span></div>',
        replace:true,
        transclude:true,
        //link 链接 操作DOM 绑定事件 针对的是通过指令替换的那个元素

        //scope 是分别是每个控制器上的scope 作用域 ；element 是当前指令的元素（指元素 person==替换person的那一个元素，不包含子元素）；attrs 当前元素的属性
        link:function(scope,element,attrs){
            element.bind('click',function(){
                console.log(element.children('span').eq(1))
                console.log(element.attr('like'))
                //1、直接调用控制器上的方法 两种 （但是不可用，因为不是所有控制器都有相同的方法）
                //scope.shopping();
                //scope.$apply('shopping()');
                //通过元素相同的属性（属性是自定义的） 调用不同的方法
                scope.$apply(attrs['like']) //attrs['like'] --> element.attr('like')==>得到值
                //scope.$apply(element.children('span').eq(1).attr('like'))
            })
        }
    }
})