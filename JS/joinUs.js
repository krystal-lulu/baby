$(function(){
    var mmlunbo = document.getElementsByClassName("mmlunbo")[0];
    var mlbImg = document.getElementsByClassName("mlbImg");
    var mmTitle = document.getElementsByClassName("mmTitle");

    var turnHide = document.querySelector(".joinMiddle .middleLeft .leftBottom .turnBody .turnHide");
    var turnAll = document.querySelectorAll(".joinMiddle .middleLeft .leftBottom .turnBody .turnHide .turnPart");
//----------------------------------*****左侧底部---轮播图*****--------------------------------
//左右按钮的数组
    var lrBtn = document.getElementsByClassName('turnBtn');
//代表当前图片的下标0-2
    var indexs = 0;
//自动播放  图片自动往左移动
    var timers = setInterval(function() {
        indexs++;
        changeIndexs();
    }, 2000);
//封装一个函数用于切换到第index张的位置
    function changeIndexs() {
        if(indexs == turnAll.length) {
            indexs = 0;
        }
        if(indexs == -1) {

            setTimeout(function() {
                indexs = turnAll.length - 2;
                turnHide.style.transition = '0s margin linear';
                turnHide.style.marginLeft = indexs * -235 + "px";
            }, 10);

        }
        if(indexs == turnAll.length - 1) {
            setTimeout(function() {
                turnHide.style.transition = '0s margin linear';
                turnHide.style.marginLeft = '0px';
                indexs = 0;
            }, 10);
        } else {
            turnHide.style.transition = '0.5s margin linear';
            turnHide.style.marginLeft = -235 * indexs + 'px';
        }

    }
//点击左右的按钮，可以切换上一张下一张
    for(var i = 0; i < 2; i++) {
        lrBtn[i].index = i;
        lrBtn[i].onmouseover = function() {
            clearInterval(timers);
        }
        lrBtn[i].onmouseout = function() {
            timers = setInterval(function() {
                indexs++;
                changeIndexs();
            }, 2000);
        }
        lrBtn[i].onclick = function() {
            if(this.index == 0) {
                indexs--;
                changeIndexs();
            }
            if(this.index == 1) {
                indexs++;
                changeIndexs();
            }
        };
    }

    var mlbDiv = document.getElementsByClassName("mlbDiv")[0];
    var mlbAll = document.getElementsByClassName("mlbAll");
//----------------------------------*****正文----轮播图******--------------------------------
//左右按钮的数组
    var lrButton = document.getElementsByClassName('lrButton');
//代表当前图片的下标0-2
    var index = 0;
//自动播放  图片自动往左移动
    var timer = setInterval(function() {
        index++;
        changeIndex();
    }, 2000);
//封装一个函数用于切换到第index张的位置
    function changeIndex() {
        if(index == mlbAll.length) {
            index = 0;
        }
        if(index == -1) {

            setTimeout(function() {
                index = mlbAll.length - 2;
                mlbDiv.style.transition = '0s margin linear';
                mlbDiv.style.marginLeft = index * -645 + "px";
            }, 10);

        }
        if(index == mlbAll.length - 1) {
            setTimeout(function() {
                mlbDiv.style.transition = '0s margin linear';
                mlbDiv.style.marginLeft = '0px';
                index = 0;
            }, 10);
        } else {
            mlbDiv.style.transition = '0.5s margin linear';
            mlbDiv.style.marginLeft = -645 * index + 'px';
        }

    }
//点击左右的按钮，可以切换上一张下一张
    for(var i = 0; i < 2; i++) {
        lrButton[i].index = i;
        lrButton[i].onmouseover = function() {
            clearInterval(timer);
        }
        lrButton[i].onmouseout = function() {
            timer = setInterval(function() {
                index++;
                changeIndex();
            }, 2000);
        }
        lrButton[i].onclick = function() {
            if(this.index == 0) {
                index--;
                changeIndex();
            }
            if(this.index == 1) {
                index++;
                changeIndex();
            }
        };
    }

//--------------点击图片或文章标题，进入另一个文章详细内容页面，轮播图页面隐藏-----------
    var xiabiao = 0;
    var li1=document.querySelector(".joinMiddle .top2 ul .li1");
    var mmInformation = document.getElementsByClassName("mmInformation")[0];
    var lis = document.getElementsByClassName("lis");
//li1.style.background="url(images/nobi2.png)";
    for(var i = 0; i < lis.length; i++) {
//	lis[i].xiabiao = i;
        lis[i].onclick = function() {
            console.log(li1.style.background);
            for(var j=0;j<lis.length;j++){
                lis[j].className = 'lis';
            }
            this.className="li1 lis";
            mmlunbo.style.display = "block";
            mmInformation.style.display = "none";
        }
    }
    for(var j = 0; j < mmTitle.length; j++) {
        mmTitle[j].onclick = function() {
            mmlunbo.style.display = "none";
            mmInformation.style.display = "block";
        }
        mlbImg[j].onclick = function() {
            mmlunbo.style.display = "none";
            mmInformation.style.display = "block";
        }
    }
})
