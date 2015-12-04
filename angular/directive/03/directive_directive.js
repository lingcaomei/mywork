/**
 * Created by Window 7 on 2015/12/3.
 */

//指令与指令直接怎么交互
/**
 * 1、通过 (girl)指令里面的controller：function($scope){}暴露出来一个对象
 * 2、然后 别的指令（flower）require:'^girl' 这个指令(girl) 得到这个对象
 * 3、接着 别的指令（flower）的link：function(scope,element,atrrs,girlCtrl){};参数 girlCtrl就是这个对象
 *      可以调用这个对象的方法和属性进行交互
 */

var app=angular.module('app',[]);

app.directive('girl',function(){
    return {
        restrict:'E',
        template:'<div>莉莉</div>',
        replace:true,
        //本指令向外界暴露的对象(构造函数) function(){},这也是girl指令的控制器
        controller:function($scope){
            $scope.gifts=[];
            console.log($scope==$rootScope)//true 因为girl上面没有控制器，所以为此时指的时根作用域 true
            this.receive=function(gift){
                $scope.gifts.push(gift);
            }
        },
        link:function(scope,element,attrs){
            element.bind('click',function(){
                alert(scope.gifts)
            })
        }
    }
})

//属性也可以是指令 定义flower指令
app.directive('flower',function(){
    return {
        require:'^girl',//当一个指令依赖另一个指令时，要require进来 ，
        restrict:'A',
        link:function(scope,element,atrrs,girlCtrl){//参数命名随意 但是顺序不要乱
            //girlCtrl就是require进来的girl指令暴露出来的对象
            girlCtrl.receive('flower')
        }
    }
})

//属性也可以是指令 定义diamond指令
app.directive('diamond',function(){
    return {
        require:'^girl',//依赖girl指令
        restrict:'A',
        link:function(scope,element,attrs,girlCtrl){
            girlCtrl.receive('diamond')
        }
    }
})