/**
 * Created by Alienware on 2018/4/11 0011.
 */
var app=angular.module("testApp",[]);
var ss=["Jason","Tim","Aki","Fans","Rose"];
var ss2=[
    {"name":"Jason","age":26},
    {"name":"Tim","age":22},
    {"name":"Aki","age":7},
    {"name":"Fans","age":44},
    {"name":"Rose","age":38}
];

var ss3={
    a:{"name":"Jason","age":26},
    b:{"name":"Tim","age":22},
    c:{"name":"Aki","age":7}
};
app.controller("optCtrl1",function ($scope) {
    $scope.names=ss;
});

app.controller("optCtrl2",function ($scope) {
    $scope.selectP=ss2[0];//设置初始值
    $scope.persons=ss2;

    
    //使用对象方式进行设置
    $scope.xys=ss3;
    $scope.selectX=ss3.a;
});