var app=angular.module('app',[]);
app.directive('hello',function(){
    return {
        restrict:'EACM',//标签 属性 类名 注释
        template:'<div>hello!</div>',
        replace:true//替换 否则会在原来标签内生产子元素
    }
})

app.directive('ngtransclude',function(){
    return {
        restrict:'EACM',
        template:'<div>保留<div ng-transclude></div></div>',
        replace:true,
        transclude:true//替换时把原来标签的内容(包括子元素)留下放在上面ng-transclude 标签里面
    }
})
/**
 * Created by Window 7 on 2015/11/20.
 */
