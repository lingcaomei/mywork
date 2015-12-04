/**
 * Created by Window 7 on 2015/11/26.
 */
var app=angular.module('app',['ui.router']);//注入路由模块 ui.router

//初始化状态
app.run(function($rootScope,$state){//传入状态值
    //注册事件
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,formParams,formState){
        //toState 获取当前页面 路径的 路由.state对象
        console.log(toState)
        if(toState.needLogin){
            if(!$rootScope.username){//判断是否登陆 用户名（在登录成功后，将用户名赋值给$rootScope）
                alert('你还没有登陆');
                event.preventDefault();//阻止默认事件 跳转

                $state.go('login')//点击之后还没有登陆  直接跳到登陆页面
                return false;
            }
        }
        //将当前页面 路由.state对象的name值赋给current
        $rootScope.current=toState.name;
        console.log($rootScope.current)
    })
})
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.when('','/home');//设置默认主页 当为空的时候 渲染url为 '/home' 的页面
    $urlRouterProvider.when('/user','/user/userlist');
    $stateProvider
        .state('home',{//'home'与链接上的ui-sref的值相对应 ui-sref="home"
            url:'/home',
            templateUrl:'./home.html',
            controller:'homeCtrl'
        })
        .state('user',{
            url:'/user',
            templateUrl:'./user.html',
            controller:'userCtrl'
        })
        .state('list',{
            url:'/list',
            templateUrl:'./list.html',
            controller:'listCtrl'
        })
        .state('profile',{
            url:'/profile',
            views:{ //该页面 包含多个视图渲染
                '':{
                    templateUrl:'./profile.html' //主页面
                },
                'name@profile':{ //name@profile  profile下面的 name视图
                    templateUrl:'./profile/name.html'//模板 文件连接
                    //controller:'listCtrl'
                },
                'age@profile':{
                    template:'<div>年龄：22</div>'//html片段
                    //controller:'listCtrl'
                }
            }
            //templateUrl:'./profile.html',
            //controller:'profileCtrl'
        })
        .state('login',{
            template:'请登录'
        })
        .state('user.userlist',{
            url:'/userlist',
            templateUrl:'./user/userlist.html',
            controller:'userlistCtrl'
        })
        .state('user.add',{
            url:'/add',
            templateUrl:'./user/add.html',
            controller:'addCtrl',
            //needLogin:true//自定义的 表示是否需要登陆 true需要
        })
        .state('user.view',{
            url:'/view/:id',//路径 （可以任意改 要把那边的id传过来 下面$stateParams才能拿到id）
            templateUrl:'./user/view.html',
            controller:'viewCtrl'
        })

})

app.controller('homeCtrl',function($scope){

})
app.controller('userCtrl',function($scope){

})
app.controller('listCtrl',function($scope){

})
app.controller('profileCtrl',function($scope){

})
//
app.controller('userlistCtrl',function($scope){

})
app.controller('addCtrl',function($scope){

})
app.controller('viewCtrl',function($scope,$stateParams){
    //$stateParams 拿到 路径(url) 里面传入的对象
    //$scope.name='朱莉';
    $scope.id=$stateParams.id;//可以根据传入的id不同，渲染不同的内容 id一般是从后台那边过来的数据
    if($scope.id==1){
        $scope.name='朱莉';
    }else if($scope.id==2){
        $scope.name='莎琳';
    }
})