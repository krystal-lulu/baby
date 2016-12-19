$(function(){
    var clickleft=document.getElementsByClassName('clickleft');
    var rightcontent=document.getElementsByClassName('rightcontent');
    // 黄底
    var About_nobi2=document.getElementsByClassName('imgs2');
    // 白底
    var About_nobi=document.getElementsByClassName('imgs1');
    var word=document.getElementsByClassName('word');
    // var ab=document.querySelectorAll('.imgs1');
    for (var i = 0; i < clickleft.length; i++) {
        clickleft[i].index=i;
        clickleft[i].onclick=function(){
            // index=this.index;
            for (var i = 0; i < rightcontent.length; i++) {
                rightcontent[i].className='rightcontent none '
                About_nobi2[i].className='imgs2 none';
                About_nobi[i].className='imgs1 block';
                About_nobi[i].className='imgs1 block';
                word[i].className='word activeblue';
            }
            rightcontent[this.index].className='rightcontent block';
            About_nobi2[this.index].className='imgs2 block';
            // About_nobi[this.index].style.z-index=20;
            About_nobi[this.index].className='imgs1 block';
            About_nobi[this.index].className='imgs1 none';
            word[this.index].className='word activewhite';

        }
    }



    var turnHide = document.querySelector(".leftBottom .turnBody .turnHide");
    var turnAll = document.querySelectorAll(" .leftBottom .turnBody .turnHide .turnPart");
//----------------------------------轮播图--------------------------------
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
        if(indexs ==turnAll.length) {
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


})
