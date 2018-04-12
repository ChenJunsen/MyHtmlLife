/**
 * Created by Alienware on 2018/4/12 0012.
 */
var app=angular.module("testApp",[]);
//依赖注入五大元素:
//1.value
//2.factory
//3.provider
//4.constant
//5.service

//创建一个名字叫defaultRes的默认值，值为-1
app.value("defaultRes",-1);

//创建一个名字叫CalFactory的计算工厂类，里面包含加法，乘法，除法，平方的具体算法
//注意：该方法会有返回值，返回当前的fac对象
app.factory("CalFactory",function () {
    this.factory={};//先声明一个factory对象
    factory.add1(function (a,b) {
        return a+b;
    });
/*    factory.mul1(function (a,b) {
        return a*b;
    });
    factory.sub1(function (a,b) {
        return a-b;
    });
    factory.square1(function (a) {
        return a*a;
    });*/
    return factory
});

//创建一个CalService,将CalFactory绑定到这个服务上面来
//*这里采用的是显式注入*
app.service("CalService",function (CalFactory) {
    this.add=function (a,b) {
        return CalFactory.add1(a,b);
    }
/*    this.mul=function (a,b) {
        return CalFactory.mul1(a,b);
    }
    this.sub=function (a,b) {
        return CalFactory.sub1(a,b);
    }
    this.square=function (a) {
        return CalFactory.square1(a);
    }*/
});

//下面的就是隐式注入
/*app.service("CalService",function (CalFactory) {
 this.add=function (a,b) {
 return CalFactory.add(a,b);
 }
 this.mul=function (a,b) {
 return CalFactory.mul(a,b);
 }
 this.sub=function (a,b) {
 return CalFactory.sub(a,b);
 }
 this.square=function (a) {
 return CalFactory.square(a);
 }
 });*/


//将Service,Value应用到Controller上面
//下面是显式写法
/*app.controller("ctrl1",["$scope","CalService","defaultRes",function ($scope,CalService,defaultRes) {
    $scope.n1=0;
    $scope.n2=0;
    $scope.res=defaultRes;
    $scope.addClick=function () {
        $scope.res=CalService.add($scope.n1,$scope.n2);
    }
    $scope.mulClick=function () {
        $scope.res=CalService.mul($scope.n1,$scope.n2);
    }
    $scope.subClick=function () {
        $scope.res=CalService.sub($scope.n1,$scope.n2);
    }
    $scope.squareClick=function () {
        $scope.res=CalService.square($scope.$scope.n2);
    }

}]);*/

app.controller("cc",function ($scope,CalService,defaultRes) {
    $scope.n1=0;
    $scope.n2=0;
    $scope.res=defaultRes;
    /*$scope.res=defaultRes;
    $scope.addClick=function () {
        $scope.res=CalService.add($scope.n1,$scope.n2);
    }
    $scope.mulClick=function () {
        $scope.res=CalService.mul($scope.n1,$scope.n2);
    }
    $scope.subClick=function () {
        $scope.res=CalService.sub($scope.n1,$scope.n2);
    }
    $scope.squareClick=function () {
        $scope.res=CalService.square($scope.$scope.n2);
    }*/

});