/**
 * Created by Alienware on 2018/4/9 0009.
 */
$(document).ready(function () {
    var isHide = false;
    var btn_toggle = $("#btn_toggle_text");
    btn_toggle.click(function () {
        /*
         $(selector).toggle(speed,callback);
         可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
         可选的 callback 参数是 toggle() 方法完成后所执行的函数名称。
         */
        $("#title1").toggle("fast", function () {
            isHide = !isHide;
            btn_toggle.val(isHide ? "点我显示上面文字" : "点我隐藏上面文字");
        })
    })
    console.log($("#div3>img").first().attr("src"))
    /*$("#div3>img")[0].click(function () {
        alert("torch light II");
    })*/
    var imgs=$("#div3>img");
    for(let i=0;i<imgs.length;i++){
        //使用eq进行遍历
        imgs.eq(i).click(function () {
            alert("点击了"+i)
        })
    }
})