/**
 * Created by Alienware on 2018/4/11 0011.
 */
var app=angular.module("testApp",[]);

app.controller("ctrl1",function ($scope,$http) {
    $scope.news="加载中...";
    //"http://localhost:8080/MyAssetServer/txt/news.txt"   外部地址存在跨域访问的问题
    //标准写法是:
    //$http.get(url).then(successCallback,failCallback)
    $http.get("../asset/text/民调异闻录.txt").then(function onSuccess(res) {
        console.log(res.data);
        $scope.news=res.data;
    },function onFailed(msg) {
        console.log(msg.data);
        $scope.news=msg.statusText;
    },function onProgress(pro) {
        console.log("进度:"+pro);
    })
    
    
    //这个是简写
    /*$get("../asset/text/民调异闻录.txt").then(function (res) {
        $scope.news=res.data;
    });*/
});