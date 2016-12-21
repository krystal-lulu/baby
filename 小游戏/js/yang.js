window.onload=function(){
	var money=document.querySelector('.money');
	var box=document.querySelector('.box');
		var yang=document.querySelector('.yang');
		var isRun=true;
		var count=0;
		//创建羊
		var yang=document.createElement('div');
		yang.className='yang';
		box.appendChild(yang);
		//创建积分容器并初始化
		var scoreBox=document.createElement('div')
		scoreBox.innerHTML='金币：'
		var score=document.createElement('span');
		score.className='score';
		scoreBox.className='scoreBox';
		scoreBox.appendChild(score);
		box.appendChild(scoreBox);
		score.innerHTML=0;
		//创建时间容器并初始化
		var timeBox=document.createElement('div')
		timeBox.innerHTML='时间：'
		var time=document.createElement('span');
		time.className='time';
		timeBox.className='timeBox';
		timeBox.appendChild(time);
		box.appendChild(timeBox);
		var timecount=60;
		time.innerHTML=timecount.toFixed(2);
		//金币的容器
		var moneyBox=document.createElement('div')
		box.appendChild(moneyBox);
		var timer1=setInterval(function(){
			if(timecount==0.00){
				clearInterval(time);
				clearInterval(timer1);
				clearInterval(timer2);
				moneyBox.innerHTML='';
				yang.onmouseup=null;
				yang.onmousedown=null;
				document.onmousemove=null;
				alert("游戏结束！");
			}else{
				timecount=timecount-0.10;
				timecount=timecount.toFixed(2);
			}
			time.innerHTML=timecount;
		},100);
		function moreMoney(){
			var moneyLeft=parseInt(Math.random()*551);
			var moneyTop=parseInt(Math.random()*(-40));
			var moreMoney=document.createElement('img');
			if(parseInt(Math.random()*101)>95){
				moreMoney.src='images/zhadan.png'
			}else if(parseInt(Math.random()*101)>99){
				moreMoney.width='40';
				moreMoney.height='40';
				moreMoney.style.backgroundColor="red"
			}else{
				moreMoney.src='images/jinbi.png';
			}
			moreMoney.className='money'
			moreMoney.style.left=moneyLeft+'px';
			moreMoney.style.top=moneyTop+'px';
			moneyBox.appendChild(moreMoney);
			return moreMoney;
		}
		function create(){
			if(box.childNodes.length<22){
				var money=moreMoney();
				money.timer=setInterval(function(){
				if(money.offsetTop<box.offsetHeight){
					var speed = Math.floor(Math.random()*5+5);
					money.style.top=money.offsetTop+speed+'px';
				}
				else{
					clearInterval(money.timer)
					money.remove();
				}
				score1(money);
				},Math.random()*15+10)
			}
		}
		var timer2=setInterval(create,100)
		function score1(obj){
			var arr=[];
			if((obj.offsetTop+obj.offsetWidth>=box.childNodes[0].offsetTop)&&
				(obj.offsetLeft>=box.childNodes[0].offsetLeft-obj.offsetWidth&&
					obj.offsetLeft<=box.childNodes[0].offsetLeft+obj.offsetWidth))
			{
				obj.remove();
				if(obj.src.match('zhadan')){
					count-=10;
				}else if(obj.src.match('jinbi')){
					count++;
				}else{
					if(isRun){
						for(var i=0;i<moneyBox.childNodes.length;i++){
							if(moneyBox.childNodes[i].src.match('jinbi')){
								arr.push(moneyBox.childNodes[i]);
								clearInterval(moneyBox.childNodes[i].timer);
								moneyBox.childNodes[i].style.transition="1s all linear";
								moneyBox.childNodes[i].style.left=yang.style.left;
								moneyBox.childNodes[i].style.top=yang.offsetTop+'px';
							}
						}
						//动画完成后执行删除操作
						setTimeout(function(){
							for(var i=0;i<arr.length;i++){
								moneyBox.removeChild(arr[i])
							}
							count=count+arr.length;
							score.innerHTML=count;
							arr=[];
							isRun=true;
						},1000)
						isRun=false;
					}

				}
				score.innerHTML=count;
			}
		}
		yang.onmousedown=function(ev1){
			var ev1Obj=window.event||ev1;
			var oldX=ev1Obj.clientX;
			document.onmousemove=function(ev){
				var evObj=window.event||ev;
				var newX=evObj.clientX;
				//羊的方向
				if(newX<oldX){
					yang.style.backgroundImage='url(images/yangleft.png)';
				}else{
					yang.style.backgroundImage='url(images/yangright.png)';
				}
				yang.style.left=(evObj.clientX-box.offsetLeft-yang.offsetWidth/2)+'px';
				if(yang.offsetLeft>=(box.offsetWidth-yang.offsetWidth)){
					yang.style.left=box.offsetWidth-yang.offsetWidth+'px';
				}else if(yang.offsetLeft<=0){
					yang.style.left=0;
				}
				oldX=newX;
			}
		}
		yang.onmouseup=function(){
			console.log("onmouseup")
			document.onmousemove=null;

}

		