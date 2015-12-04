/**
 * Created by Window 7 on 2015/11/27.
 */
var app = angular.module('myCart',[]);
app.controller('totalCtrl',function($scope){
    $scope.total=10;
    $scope.$on('changeAmount',function(event,amount){
        $scope.total=amount;
    })

    //向下传递事件$broadcast(向下) （把总额传到子控制器）
    $scope.cc=function(){
        $scope.$broadcast('totalAmout',$scope.total)
    }
    //可以多个
    $scope.dd=function(){
        $scope.$broadcast('totalAmout',$scope.total1)
    }

})
app.controller('cartCtrl',function($scope){
    $scope.item= {name:'小米',price:10,quantity:1};
    //执行change函数的时候 向上传递一个事件$emit(向上) 'changeAmount'
    $scope.change=function(){
        $scope.$emit('changeAmount',$scope.item.price*$scope.item.quantity)
    }

    //接收父级控制器传过来的事件$on（总额） **上下事件名一致  **接收参数是必须把事件event传进去
    $scope.$on('totalAmout',function(event,amount2){
        //处理拿到的参数（总额）
        $scope.item.quantity=amount2/$scope.item.price;
    })



})