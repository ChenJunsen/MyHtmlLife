/**
 * Created by Alienware on 2018/4/24 0024.
 */
var app=vx.module("testApp",[]);

app.controller("extendCtrl",["$scope",function ($scope) {
    var oriObj={name:"andy",age:14};
    var oriObj2={weight:12.6,height:33.3};

    // var conbineObj={};//默认无参初始化方式
    var conbineObj={weight:5.5};//如果出现和需要复制的对象有相同的属性，那么原来的值会被覆盖

    //extend(a,b...)方法用于将所有b中的属性复制组合到a里面去
    vx.extend(conbineObj,oriObj,oriObj2);
    $scope.ex01=oriObj;
    $scope.ex02=oriObj2;
    $scope.ex03=conbineObj;
}]);

// app.controller("injectCtrl",["$scope","$inject",function ($scope,$inject) {
// }]);

app.controller("funcCtrl",["$scope",function ($scope) {
    var a="[{'name':'Anna'},{'name':'Rose'},{'name':'Karl'}]";
    var b="19910202";
    var c=[1,2,3,4];
    var d=new Date();
    var e;
    var f=function () {

    };
    var g=11.09;
    var h={w:1,h:2};
    $scope.val01=c;
    $scope.val02=d;
    $scope.isA=vx.isArray(c);
    $scope.isD=vx.isDate(d);
    console.log(c+"是否被引用:"+vx.isDefined(c));
    console.log(f+"f是不是函数:"+vx.isFunction(f));
    console.log(g+"是不是数字:"+vx.isNumber(g));
    console.log(h+"是不是对象:"+vx.isObject(h));
    console.log(a+"是不是String:"+vx.isString(a));

    //vx.toJson(obj, pretty);
    //如果设置为true，JSON输出将包含换行符和空格。如果设置为一个整数，JSON输出将包含许多空间每缩进（默认为2）
    console.log("对象转json:"+vx.toJson(h,true));
}]);