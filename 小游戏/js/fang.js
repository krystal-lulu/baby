window.onload=function(){
	var btn=document.querySelector('button');
        var img=document.querySelector('img');
        var imgBox=document.querySelector('.imgBox');
        var score=document.querySelector('.score');
        var time=document.querySelector('.time');
        var bgColor=["#339966","#0099FF","#6600FF","#993366","#FF3399","#FFCC99","#CCCC99","#66FFCC","#CC3300"];
        var beishu=1;
        var scoreCount=0;
        var timeCount=60;
        var gameOver=false;
        //初始化数据
        score.innerHTML=scoreCount;
        time.innerHTML=timeCount.toFixed(2);
        btn.onclick=function(){
            btn.style.display='none';
            createImg();
            var timer=setInterval(function(){
                if(timeCount==0.00){
                    clearInterval(timer);
                    alert('游戏结束');
                    var fzmImg=document.querySelector('.fzm');
                    fzmImg.onclick=null;
                    gameOver=true;
                }else{
                    timeCount=(timeCount-0.1).toFixed(2);
                    time.innerHTML=timeCount;
                }
            },100)
        }
        function createImg(){
            if(!gameOver){
                imgBox.innerHTML='';
                var randomColorIndex=Math.floor(Math.random()*9);
                if(beishu<9){
                    beishu++;
                }
                var imgNumber=Math.pow(beishu,2);//图片总张数
                for(var i=0;i<imgNumber;i++){
                    //创建图片初始化都为柯正东图片
                    newImg=document.createElement('img');
                    newImg.setAttribute('src','images/1.png');
                    imgBox.appendChild(newImg);
                    //每次创建图片的宽度=（容器总宽度-外边距）/每行图片的张数
                    newImg.style.width=(imgBox.offsetWidth-10*beishu)/beishu+'px';
                    //每次创建图片的颜色
                    newImg.style.backgroundColor=bgColor[randomColorIndex];
                }
                //随机一张图片是房祖名
                var fzmIndex=parseInt(Math.random()*imgNumber);
                imgBox.childNodes[fzmIndex].src='images/2.png';
                imgBox.childNodes[fzmIndex].className='fzm';
//              console.log(gameOver)
                console.log('11111');
                fzmClick();
            }
        }
        function fzmClick(){
            var fzmImg=document.querySelector('.fzm');
            fzmImg.onclick=function() {
                // if(!gameOver) {
                    console.log(gameOver)
                    scoreCount++;
                    score.innerHTML=scoreCount;
                    createImg();
                // }
            }
        }
}