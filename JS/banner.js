/**
 * Created by lanou on 16/12/13.
 */

$(function(){
    var len=$('.imgBox').length;
    var count=0;
    for(var i=0;i<len;i++){
        $('.point').eq(i).attr('index',i);
    }
    function move(){
        count=(count==len)?count==0:count;
        count++;
        if(count==len){
            $('.bigBox').css('margin-left',-(count-1)*$('.imgBox').width()+'px');
            $('.point').eq(0).addClass('active');
            $('.point').eq(0).siblings().removeClass('active');
            setTimeout(function(){
                $('.bigBox').css('margin-left','0px');
                $('.bigBox').css('transition','0s');
            },1000)
        }else{
            $('.bigBox').css('transition','0.2s linear margin-left');
            $('.point').eq(count-1).addClass('active');
            $('.point').eq(count-1).siblings().removeClass('active');
            $('.bigBox').css('margin-left',-(count-1)*$('.imgBox').width()+'px');
        }
    }
    var timer=setInterval(move,2000);
    //小圆点点击
    $('.point').on('click',function(){
        count=$(this).attr('index');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.bigBox').css('margin-left',-count*$('.imgBox').width()+'px');
    });
    //左边点击
    $('.leftBtn').on('click',function(){
        count=(count-1)>=0?count-1:len-2;
        $('.point').eq(count).addClass('active');
        $('.point').eq(count).siblings().removeClass('active');
        $('.bigBox').css('margin-left',-count*$('.imgBox').width()+'px');
    });
    //右边点击
    $('.rightBtn').on('click',function(){
        count=(count+1)>=len-1?0:count+1;
        $('.point').eq(count).addClass('active');
        $('.point').eq(count).siblings().removeClass('active');
        $('.bigBox').css('margin-left',-count*$('.imgBox').width()+'px');
    });
    $('.rightBtn').on('mouseover',function(){
        clearInterval(timer);
        // console.log('right       ',timer)
    });
    $('.rightBtn').on('mouseout',function(){
        timer=setInterval(move,2000);
        // console.log('right       ',timer)
    });
    $('.leftBtn').on('mouseover',function(){
        clearInterval(timer);
        // console.log('left       ',timer)
    });
    $('.leftBtn').on('mouseout',function(){
       timer=setInterval(move,2000);
        // console.log('left       ',timer)
    });

    //.......................... 商品列表展示区..............................................
   var listLen= $('.productsList li').length;
   var listIndex=0;
   var isdisableRight=false;//右键是否可用
   var isdisableLeft=false;//左键是否可用
    function nextClick() {
        if(isdisableLeft){
            $('.last').on('mousedown',lastClick);
            isdisableLeft=false;
        }
        listIndex++;
        if(listLen!=listIndex){
            $('.productsList').css('margin-left',-listIndex*($('.productsList li').width()+25)+'px');
        }else{
            $('.next').unbind('mousedown');
            isdisableRight=true;
            listIndex--;
        }

    }
    function lastClick(){
        if(isdisableRight){
            $('.next').on('mousedown',nextClick);
            isdisableRight=false;
        }
        listIndex--;
        if(listIndex>=0){
            $('.productsList').css('margin-left',-listIndex*($('.productsList li').width()+25)+'px');
        }else{
            $('.last').unbind('mousedown');
            isdisableLeft=true;
        }
    }
    $('.last').on('mousedown',lastClick);
    $('.next').on('mousedown',nextClick);

});