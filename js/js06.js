/**
 * Created by Alienware on 2018/4/10 0010.
 */
var app=angular.module("testApp",[]);
app.controller("nameCtrl",function ($scope) {
    $scope.ed_uppercase="cjsAbb123";
    $scope.ed_lowercase="CJSabb123";
});
app.controller("currencyCtrl",function ($scope) {
    $scope.ed_count=0;
    $scope.ed_price=33.7;
});
app.controller("countryCtrl",function ($scope) {
    $scope.countries=[
        {en:'Angola',cn:'安哥拉',abbr:'AO',code:'244-7'},
        {en:'Bahamas',cn:'巴哈马',abbr:'BS',code:'1242-13'},
        {en:'China',cn:'中国',abbr:'CN',code:'86-0'},
        {en:'Dominica Rep',cn:'多米尼加',abbr:'DO',code:'1890-13'},
        {en:'Egypt',cn:'埃及',abbr:'EG',code:'20-6'}
    ];
});
app.controller("diyFilterCtrl",function ($scope) {
    $scope.oriStr="AbcdEfg";
});
//自定义字符反转过滤器
app.filter("reverse",function () {
    return function (t) {
        return t.split("").reverse().join().replace(/,/g,"");
        //关于replace的用法可以自行科普一下，如果单纯写成replace(",","")就只会替换第一个逗号
        //写成replace(/,/g,"")，g表示全局循环
    }
});