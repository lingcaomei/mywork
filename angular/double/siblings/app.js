/**
 * Created by Window 7 on 2015/11/27.
 */

var app =angular.module('myCart',[]);
app.controller('totalCtrl',function($scope,$rootScope){
    $scope.total=10;
    //兄弟之间的数据交互（事件传递）,都是使用$emit向上传递一个事件 （传给父级 $rootScope）
    $scope.cc=function(){
        $scope.$emit('totalAmount',$scope.total);
    }

    $rootScope.$on('Amount',function(event,amount){
        $scope.total=amount;
    })
})
app.controller('cartCtrl',function($scope,$rootScope){
    $scope.item= {name:'小米',price:10,quantity:1};

    //从根作用域对象上获取 兄弟传递过来的事件 数据 然后再进行处理
    $rootScope.$on('totalAmount',function(event,amount){
        $scope.item.quantity=amount/$scope.item.price;
    })

    $scope.change=function(){
        $scope.$emit('Amount',$scope.item.quantity*$scope.item.price)
    }
})
