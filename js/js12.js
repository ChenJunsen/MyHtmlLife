/**
 * Created by Alienware on 2018/4/26 0026.
 */
var app = angular.module("testApp", []);
app.factory("MathFactory", function () {
    var fac = {
        sayHello: function () {
            alert("hello");
        },
        add: function () {
            if (arguments.length == 0) {
                return 0;
            }
            var res = 0;
            for (let i = 0; i < arguments.length; i++) {
                if (angular.isNumber(arguments[i])) {
                    res += arguments[i];
                } else {
                    throw "加法操作必须都是数字类型才行";
                }
            }
            return res;
        },
        multi: function () {
            if (arguments.length == 0) {
                return 0;
            }
            var res = 1;
            for (let i = 0; i < arguments.length; i++) {
                if (angular.isNumber(arguments[i])) {
                    res *= arguments[i];
                } else {
                    throw "乘法操作必须都是数字类型才行";
                }
            }
            return res;
        },
        sub: function () {
            if (arguments.length == 0) {
                return 0;
            }
            var res = arguments[0];
            if (arguments.length > 1) {
                for (let i = 1; i < arguments.length; i++) {
                    if (angular.isNumber(arguments[i])) {
                        res -= arguments[i];
                    } else {
                        throw "减法操作必须都是数字类型才行";
                    }
                }
            }
            return res;
        },
        div: function (...args) {
            console.log(args);
            if (angular.isUndefined(args)) {
                return 0;
            }
            var arg = 0;
            if (args.length > 0) {
                arg = args[0];
            }
            if (args.length > 1) {
                for (let i = 1; i < args.length; i++) {
                    arg = arg / args[i];
                }
            }
            return arg;
        }
    };
    return fac;
});

app.service("MathService", ["MathFactory", function (MathFactory) {
    this.sayHello = function () {
        MathFactory.sayHello();
    };
    this.div = function (...args) {
        console.log(args);
        return MathFactory.div(args);
    };
}]);

app.controller("testCtrl2", ["$scope", "MathFactory", "MathService", function ($scope, MathFactory, MathService) {
    console.log("减法:" + MathFactory.sub(1, 3, 5, 7, 9));
    console.log("乘法:" + MathFactory.multi(2, 1.09, 18, 113));
    MathService.sayHello();
    // MathFactory.div(1, 2, 3);
    MathService.div(1,4);
}]);
