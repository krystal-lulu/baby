$(function(){
    var clickleft=document.getElementsByClassName('clickleft');
        var rightcontent=document.getElementsByClassName('rightcontent');
        // 黄底
        var About_nobi2=document.getElementsByClassName('About_nobi2');
        // 白底
        var About_nobi=document.getElementsByClassName('About_nobi');
        var span=document.getElementsByClassName('span');
        var index=0;
        var index2=0;

        for (var i = 0; i < clickleft.length; i++) {
            clickleft[i].index=i;

            
            
            clickleft[i].onmouseover=function(){
                index2=this.index;
                var block=true;
                for (var i = 0; i < rightcontent.length; i++) {
                    About_nobi2[i].style.display='none';
                    About_nobi[i].style.display='block  ';
                    span[i].style.color='#0068b5';
                }
                About_nobi2[this.index].style.display='block';
                About_nobi2[index].style.display='block';
                About_nobi[this.index].style.display='none';
                span[this.index].style.color='white';
                // ev.cancelBubble=true;    
            }
            clickleft[i].onmouseout=function(){
                if(index==this.index){
                    return
                }
                for (var i = 0; i < rightcontent.length; i++) {
                    About_nobi2[i].style.display='none';
                    About_nobi[i].style.display='block';
                    span[i].style.color='#0068b5';
                }
                About_nobi2[index].style.display='block';
                About_nobi2[index2].style.display='none';
                // console.log("out"+index2);
                // About_nobi2[this.index].style.display='block';
                About_nobi[this.index].style.display='block';
                span[this.index].style.color='#0068b5';
                // ev.cancelBubble=true;
            }
            clickleft[i].onclick=function(){
                index=this.index;   
                for (var i = 0; i < rightcontent.length; i++) {
                    rightcontent[i].style.display='none';
                    About_nobi2[i].style.display='none';
                    About_nobi[i].style.display='block';
                    span[i].style.color='#0068b5';
                }
                rightcontent[this.index].style.display='block';
                About_nobi2[this.index].style.display='block';
                About_nobi[this.index].style.display='none';
                span[this.index].style.color='white';
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


   
