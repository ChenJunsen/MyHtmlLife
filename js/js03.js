/**
 * Created by Alienware on 2018/4/9 0009.
 */
$(document).ready(function () {
    console.log("ok")
    //加载外部文件，表示加载news20180409.txt文件中标签id为t1的元素的内嵌文字到div1当中
    // $("#div1").load("../asset/text/news20180409.txt #t1")
    
    //完整的写法
    //load(url,param,callback(responseTxt,statusTxt,xhr))
    $("#div1").load("../asset/text/news20180409.txt #t1","",function (responseTxt,statusTxt,xhr) {
        console.log("responseTxt:"+responseTxt)
        console.log("statusTxt:"+statusTxt)
        console.log("xhr:"+xhr.readyState)
    })
})