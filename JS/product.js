/**
 * Created by lanou on 16/12/16.
 */
$(function(){
    var init=true;
    var lastIndex=10;
    var firstIndex=1;
    var pageNum=1;
    var newType='';
    // pageClick();//product跳转判断放开
    function pageClick(e){
        // console.log('e    ',typeof (e))
        console.log('dddddddddd',pageNum)
        var evobj=window.event||e;
        _this=evobj.target;
        if(typeof (e)=="string"){
            newType=e;
        }
        if(!init){
            //检测分页的最后一个显示的数字
            var len=$('.CenterRight .link .page a').length;
            var lastObj= $('.CenterRight .link .page')[0].children[len-1];
            var arr=lastObj.innerHTML.split('|');
            var nums=arr[1].match(/[0-9]/g);
            lastIndex=parseInt(nums.join(''));
            // console.log(lastIndex);
            //检测分页的第一个显示的数字
            var len1=$('.CenterRight .link .page a').length;
            var firstObj= $('.CenterRight .link .page')[0].children[0];
            var arr1=firstObj.innerHTML.split('|');
            var nums1=arr1[1].match(/[0-9]/g);
            firstIndex=parseInt(nums1.join(''));
            // console.log(firstIndex);
            //获取所点击的页数
            pageNum=$(_this).parent().text().split('|')[1];
            // console.log(pageNum)
        }
        $('.Details').empty();
        $.ajax({
            url:'PHP/product.php',
            data:{
                num:pageNum,
                type:newType,
            },
            dataType:"json",
            success:function(json){
                // console.log('sssss',json[0].type)
                for(var i=0;i<json.length;i++){
                    $('.Details').append(
                        '<div class="ProductLis">'
                        +'<div class="ProductLi">'
                        +'<img src="img/'+json[i].imageUrl+'" width="100%"/>'
                        +'</div>'
                        +'<div class="ProductName">'+json[i].intro+'</div>'
                        +'</div>'
                    )
                }
                $('.CenterRight .link .page').empty();
                $('.CenterRight .link .circle').empty();
                $('.CenterRight .link .pageInfo').empty();
                $.ajax({
                    url:'PHP/page.php',
                    data: {
                        type: newType,
                    },
                    dataType:"json",
                    success:function(info){
                        // console.log(info)
                        console.log('pageNum',pageNum)
                        var message=parseInt(info.page);
                            if(message>=10){
                                    //页面向右的偏移量
                                    var offsetRight=4-(lastIndex-pageNum);
                                    //页面向左的偏移量
                                    var offsetLeft=6-(pageNum-firstIndex);
                                    //如果向右的偏移量大于0
                                    if(offsetRight>0){
                                        //如果最后一页加上偏移量大于总页数
                                        if((lastIndex+offsetRight)>message){
                                            //偏移量为总页数减去最后一页
                                            offsetRight=message-lastIndex;
                                        }
                                        firstIndex+=offsetRight;
                                    }else{
                                        offsetRight=0;
                                    }
                                    //如果向左的偏移量大于0
                                    if(offsetLeft>0){
                                        //如果显示的第一页减去向左偏移量大于0
                                        if((firstIndex-offsetLeft)>0){
                                            firstIndex-=offsetLeft;
                                            lastIndex-=offsetLeft;
                                        }else{
                                            //如果第一页减去偏移量小于0 说明越界了
                                            firstIndex=1;
                                            //越界的时候处理最后一页判断
                                            lastIndex=10;
                                        }
                                    }else{
                                        offsetLeft=0;
                                    }
                                    // console.log('lastIndex   ',lastIndex);
                                    // console.log('pageNum   ',pageNum);
                                    //如果页数大于最后显示页数减去四页 则显示后面的页数
                                    function createlink(i){
                                        if(i==pageNum){
                                            //点击的页号变色
                                            $('.CenterRight .link .page').append(
                                                '<a><span>|</span><span class="num active">'+i+'</span></a>'
                                            )
                                        }else{
                                            $('.CenterRight .link .page').append(
                                                '<a><span>|</span><span class="num">'+i+'</span></a>'
                                            )
                                        }
                                    }
                                    if(pageNum>(lastIndex-4)){
                                        for(var i=firstIndex;i<=lastIndex+offsetRight;i++){
                                            createlink(i);
                                        }
                                        if( offsetRight!=message-lastIndex){
                                            $('.CenterRight .link .next').prepend('<span class="circle">...</span>');
                                        }
                                        $('.CenterRight .link .last').prepend('<span class="circle">...</span>');

                                    }else{
                                        //向左偏移
                                        if(firstIndex>1&&offsetLeft>0){
                                            for(var i=firstIndex;i<=lastIndex;i++){
                                                createlink(i);
                                            }
                                        }else{
                                            //不偏移
                                            for(var i=firstIndex;i<=lastIndex;i++){
                                                createlink(i);
                                            }
                                        }
                                        if(firstIndex>1){
                                            $('.CenterRight .link .last').prepend('<span class="circle">...</span>');
                                        }
                                        $('.CenterRight .link .next').prepend('<span class="circle">...</span>');

                                    }
                                    $('.CenterRight .link .pageInfo').append(
                                        'from <span>'+info.all+'</span>'
                                        + ' products '
                                        +pageNum+'/'+message
                                    )
                            }
                            else{
                                console.log(pageNum)
                                    for(var i=firstIndex;i<=message;i++) {
                                        if (i == pageNum) {
                                            //点击的页号变色
                                            $('.CenterRight .link .page').append(
                                                '<a><span>|</span><span class="num active">' + i + '</span></a>'
                                            )
                                        } else {
                                            $('.CenterRight .link .page').append(
                                                '<a><span>|</span><span class="num">' + i + '</span></a>'
                                            )
                                        }
                                    }
                                    $('.CenterRight .link .pageInfo').append(
                                        'from <span>'+info.all+'</span>'
                                        + ' products '
                                        +pageNum+'/'+message
                                    )
                             }
                        }

                })
            }
        })
        init=false;
    }
    $('.CenterRight .link .page').on('click',pageClick);
    $.ajax({
        url:'PHP/productTitle.php',
        dataType:'json',
        success:function(json){
            for(var i=0;i<json.length;i++){
                $('.ProductsNav').append(
                    '<div class="listBox">'
                        +'<div class="ProductsList" id="'+json[i].type+'">'
                            + '<a href="#">'
                                + '<img src="images/'+json[i].imgUrl+'" width="36px"/>'
                                +'<span>'+json[i].title+'</span>'
                            +'</a>'
                        +'</div>'
                        +'<div class="NavHid" ></div>'
                    +'</div>'

                )
            }
            $('.ProductsNav .listBox').on('click',function(e) {
                var evObj=window.event||e;
                var target=evObj.currentTarget;
                var type=$(target).find('.ProductsList').attr('id');
                // console.log('type',type)
                pageClick(type);
                $.ajax({
                    url:'PHP/titleList.php',
                    data:{
                        id:type,
                    },
                    dataType:'json',
                    success:function (json) {
                        $('.NavHid').empty();
                        for(var i=0;i<json.length;i++){
                            $('.NavHid').append(
                                '<a href="#"><li class="ProductMenu"><span>'+json[i].list+'</span></li></a>'
                            )
                        }
                        $(target).find($('.NavHid')).toggleClass('active');
                        $(target).siblings().find($('.NavHid')).removeClass('active');
                    }
                })
            });
        }
    })
})