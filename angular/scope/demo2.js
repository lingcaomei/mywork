angular.module('app',[])
    .controller('list',function($scope){
        $scope.txtarr=[];
        $scope.create=function(){
            return $scope.txtarr.push($scope.txt);
        }
        $scope.txt='';
    })/**
 * Created by Window 7 on 2015/11/18.
 */
