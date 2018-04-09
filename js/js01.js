/**
 * Created by Alienware on 2018/4/8 0008.
 */
var jq=jQuery.noConflict();//命名冲突解决办法

jq(document).ready(function () {
    /*
    1.jQuery 元素选择器
    jQuery 使用 CSS 选择器来选取 HTML 元素。
    $("p") 选取 <p> 元素。
    $("p.intro") 选取所有 class="intro" 的 <p> 元素。
    $("p#demo") 选取所有 id="demo" 的 <p> 元素。

    2.jQuery 属性选择器
    jQuery 使用 XPath 表达式来选择带有给定属性的元素。
    $("[href]") 选取所有带有 href 属性的元素。
    $("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
    $("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
    $("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。

    3.jQuery CSS 选择器
    jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
    下面的例子把所有 p 元素的背景颜色更改为红色：
    实例
    $("p").css("background-color","red");
    */
    jq("#btn").click(function () {
        alert("ok")
        jq(this).hide()
    })
})