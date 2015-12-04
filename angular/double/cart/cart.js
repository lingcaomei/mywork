/**
 * Created by Window 7 on 2015/11/27.
 */
var app = angular.module('myCart',[]);
app.controller('cartCtrl',function($scope){
    $scope.items= [
        {name:'小米',price:10,quantity:1},
        {name:'小米2',price:10,quantity:1},
        {name:'小米3',price:10,quantity:1},
        {name:'小米4',price:10,quantity:1},
        {name:'红米',price:10,quantity:1}
    ]
    //删除 数据改变视图
    $scope.del=function(index){
        $scope.items.splice(index,1)
    }
    $scope.total=function(){
        var total=0;
        $scope.items.forEach(function(item){
            total+=item.price*item.quantity;
        })
        return total;
    }
    $scope.discount=function(){
        return $scope.total()>100?$scope.total()*0.1 :0
    }
})