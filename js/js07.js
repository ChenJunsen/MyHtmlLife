/**
 * Created by Alienware on 2018/4/10 0010.
 */
var app=angular.module("testApp",[]);

//$location服务
app.controller("cpu",function ($scope,$location) {
    //获取当前页面的URL
    $scope.mUrl=$location.absUrl();
});
//$http服务
app.controller("httpCtrl",function ($scope,$http) {
    //模拟一下网络请求地址(实际文件地址在源文件所在服务器上面)
    $http.get("../asset/text/xianjianqixiazhuan6.json").then(function (res) {
        console.log(res.data);
        $scope.imgUrl=res.data.url;
    });
});
//$timeout延迟操作
app.controller("timeoutCtrl",function ($scope,$timeout) {
    $scope.tt="3秒后我就变了";
    $timeout(function () {
        $scope.tt="哈哈哈哈哈哈哈啊哈";
    },3000);//设置指定时间后的操作
})
//$interval定时操作
app.controller("intervalCtrl",function ($scope,$interval) {
    $interval(function () {
        $scope.cTime=new Date().toLocaleTimeString();
    },1000);
});


//自定义名字为decimal2Hex的服务
app.service("decimal2Hex",function () {
    this.hexFunc=function (r) {
        return r.toString(16);
    };
});

//将自定义服务绑定到自定义过滤器上面
app.filter("decimal2HexFilter",["decimal2Hex",function (decimal2Hex) {
    return function (x) {
        return decimal2Hex.hexFunc(x);
    };
}]);

app.controller("diyCtrl",function ($scope) {
    $scope.ed_number=12;
});

app.controller("demoCtrl",function ($scope) {
    $scope.first="Wong";
    $scope.second="Tang";
    $scope.pName=function () {
        return $scope.first+$scope.second;
    }
});