// 获取图片 伪数组 数组是从0开始的
var imgs = document.querySelectorAll(".nav_inner img");

// 定义一个标识符，用于记录当前是那一张图片
var flag = 1;
// 定义是个循环定时器
setInterval(function () {
    switch (flag) {
        case 1://用flag和case后面的值进行比较，满足则执行case后面的代码，不满足则不执行
            imgs[0].style.opacity="1";
            imgs[1].style.opacity="0";
            imgs[2].style.opacity="0";
            flag=flag+1;
            break;//执行完上面的代码就结束
        case 2://用flag和case后面的值进行比较，满足则执行case后面的代码，不满足则不执行
            imgs[0].style.opacity="0";
            imgs[1].style.opacity="1";
            imgs[2].style.opacity="0";
            flag=flag+1;
            break;//执行完上面的代码就结束
        case 3://用flag和case后面的值进行比较，满足则执行case后面的代码，不满足则不执行
            imgs[0].style.opacity="0";
            imgs[1].style.opacity="0";
            imgs[2].style.opacity="1";
            flag=1;
            break;//执行完上面的代码就结束
    }
},2000);//1000ms


// 鼠标滚轮事件
//获取street_fr
var str = document.querySelector(".street_fr");
//获取ul
var ul = document.querySelector(".street_fr ul");


// 获取ul的left值
var ulLeft = ul.offsetLeft;

//获取拖动框
var onto = document.querySelector(".onto");
// 获取拖动框的left值
var ontoLeft = onto.offsetLeft;

console.log(ulLeft)
str.onmousewheel = function(ev){
    ev=ev || window.event;
    //如果滚轮向上
    if(ev.wheelDelta>0){
        //判断ulLeft是否等于0，如果不是0就移动，如果是0就不移动
        if(ulLeft<=0){
            ulLeft = ulLeft +24;
            ul.style.left=ulLeft+"px";
            ontoLeft=ontoLeft-10;
            onto.style.left=ontoLeft+"px";
        }
    }else if(ev.wheelDelta<0){//如果滚轮向下
        //判断ulLeft是否在-7290的范围，如果在就移动，如果不在就不移动
        if(ontoLeft<900){
            ulLeft = ulLeft -24;
            ul.style.left=ulLeft+"px";
            ontoLeft=ontoLeft+10;
            onto.style.left=ontoLeft+"px";
        }
    }
    return false;

}


var span = document.querySelector("span");
var div = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
//定义一个flag判断当前是收起还是展开
var flag=true;
function ss() {
    // if(flag){
    //     div.style.right="0";
    //     img2.style.transform="rotateY(360deg)";
    //     span.innerText="收起";
    //     flag=false;
    // }else {
    //     div.style.right="-155px";
    //     img2.style.transform="rotateY(180deg)";
    //     span.innerText="展开";
    //     flag=true;
    // }
    flag?div.style.right="0":div.style.right="-155px";
    flag?img2.style.transform="rotateY(360deg)":img2.style.transform="rotateY(180deg)";
    flag?span.innerText="收起":span.innerText="展开";
    flag?flag=false:flag=true;
}
span.onclick=ss;







