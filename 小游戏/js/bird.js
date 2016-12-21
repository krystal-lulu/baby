	window.onload=function(){

		var box=document.querySelector('.box')
		//草移动 可以用css3动画来写，使用定时器性能较差能用css3写就用css3 写
		/*
		repeat了
			-webkit-@keyframes move{
				from{
					backgroundPosition:0 0;
				}to{
					backgroundPosition:-343px 0;	
				}
			}
		*/
		grassFnc();
		function grassFnc(){
			//创建草
			var grass=document.createElement('div');
			grass.className='grass';
			box.appendChild(grass);
			//移动的距离初始化
			var grassMove=0;
			var grassTimer=setInterval(function(){
			if(grass.offsetLeft>-grass.offsetWidth/2){
				grassMove--;
			}else{
				grassMove=0;
			}
			grass.style.left=grassMove+'px';
			},10)
		}
		//游戏开始界面
			//1、初始化分数
		var scoreBox=document.createElement('div');
		var scoreImg=document.createElement('img');
		
		var isStart=true;
		var birdTimer1=null;
		var createPipe1=null;
		var count=0;
		
		function init(){
			scoreBox.appendChild(scoreImg);
			scoreBox.className='scoreBox';
			box.appendChild(scoreBox);
			scoreImg.src='images/'+count+'.jpg';
			scoreBox.style.marginLeft=-scoreBox.childNodes.length*scoreImg.offsetWidth/2+'px';
			//按钮容器....................................
			var btn=document.createElement('div')
			box.appendChild(btn);
			btn.className='btn';
			//开始按钮
			var start=document.createElement('img')
			start.className='start';
			btn.appendChild(start);
			start.src='images/start.jpg';
			//提交按钮
			var subBtn=document.createElement('img')
			subBtn.className='submit';
			btn.appendChild(subBtn);
			subBtn.src='images/submit.jpg';
			//........................................
			//开始游戏的图片
			//一个大容器............................................
			var headBox=document.createElement('div');
			var headImg=document.createElement('img');
			headBox.appendChild(headImg);
			box.appendChild(headBox)
			headBox.className='headBox'
			headImg.src='images/head.jpg'
			//开始之前的小鸟
			var birdStart=document.createElement('div');
			birdStart.className='birdStart';
			headBox.appendChild(birdStart);
			//...................................................
			//创建开始之后的小鸟
			var bird=document.createElement('img');
			start.onclick=function(){startFunc(bird,box,headBox,btn)};
			return bird;
		}
		function startFunc(bird,box,headBox,btn){
			bird.src='images/bird0.png';
			bird.className='bird'
			box.appendChild(bird);
			btn.style.display='none';
			headBox.style.display='none';
			birdTimer1=setInterval(birdFc,10);
			createPipe1=setInterval(pipeFnc,3000);
			//又生成了新的定时器
		}
		//游戏开始......................
		var bird=init();
		var birdTop=200;
		var downTimer1=null;
		//创建小鸟
		function birdUp(){
			//鼠标点击之后小鸟向上
			document.onclick=function(){
				clearTimeout(downTimer1)
				// console.log("Up   bird.style.top"+ bird.style.top)
				// console.log("Up   birdTop"+birdTop)
				//每次点击小鸟高度-100如果小鸟距离父级的高度<100则小鸟减去自身的高度
				if(parseInt(bird.style.top)<100){
					birdTop-=parseInt(bird.style.top);
					console.log(birdTop)
					bird.style.top=birdTop+'px';
					//清空鸟的定时器
					clearInterval(birdTimer1);
					setTimeout(function(){
						if(birdTop==0){//有问题。。。。。
							bird.src='images/down_bird1.png'
							isGameOver=true;
							gameover();	
						}
					},300)
				document.onclick=null;
				}else{
					birdTop-=100;
				}
				//向上小鸟
				bird.src='images/up_bird1.png';
				//点击一下向上的小鸟翅膀动一下
				setTimeout(function(){
					bird.src='images/up_bird0.png'
				},100)
				//0.3s小鸟向下
				downTimer1=setTimeout(function(){
					bird.src='images/down_bird1.png'
				},300)
			}
		}
		function birdDown(){
			//如果小鸟飞出容器则摔落
			if(parseInt(bird.style.top)==392){
				console.log('briddowm')
				console.log("bird.style.top"+bird.style.top)
				console.log("bird.offsetTop"+bird.offsetTop)
				isGameOver=true;
				gameover();	
			}else{
				birdTop+=1;
				bird.style.top=birdTop+'px';
			}
		}
		function birdFc(){
			birdUp();
			birdDown();
		}
		var birdTimer=setInterval(birdFc,10)
	//一个管子...........................................

		var pipeGroup=document.createElement('div');
		pipeGroup.className='pipeGroup';
		box.appendChild(pipeGroup);

		function pipe(){
			var pipeBox=document.createElement('div');
			pipeBox.className='pipeBox';
			pipeGroup.appendChild(pipeBox);
			//上半部分管子
			var uppipeTou=document.createElement('img')
			uppipeTou.src='images/up_pipe.png';

			var uppipe=document.createElement('div')
			uppipe.className='uppipe';
			pipeBox.appendChild(uppipe);

			uppipe.appendChild(uppipeTou)
			//下半部分管子
			var downpipe=document.createElement('div')
			downpipe.className='downpipe';
			pipeBox.appendChild(downpipe);

			var downpipeTou=document.createElement('img')
			downpipeTou.src='images/down_pipe.png';
			
			downpipe.appendChild(downpipeTou)
			//随机一个管子长度
			// random2>60...............
			//pipebox的高度-122=300 122中间的间距  要随机的高度422-122-120
			// var random1=Math.random()*(240-100)+100;
			// var random2=300-random1;
			var random1=parseInt(Math.random()*180);
			var random2=180-random1;
			uppipe.style.height=(random1+60)+'px';
			uppipeTou.style.marginTop=(uppipe.offsetHeight-uppipeTou.offsetHeight)+'px';
			uppipe.style.backgroundImage='url(images/up_mod.png)';
			downpipe.style.height=(random2+60)+'px';
			downpipe.style.backgroundImage='url(images/down_mod.png)';
			return pipeBox;
		}
	//生成新的管子.........................................
		function pipeFnc(){
			var newPipe=pipe();
			var pipeMove=400;
			iscount=false;
			newPipe.timer=setInterval(function(){
				if(isGameOver){
					console.log('over!!')
					clearInterval(newPipe.timer);
					return;
				}else{
					pipeMove--;
					newPipe.style.left=pipeMove+'px';
					if(parseInt(newPipe.style.left)==-100){
						clearInterval(newPipe.timer);
						newPipe.remove();
					}
					beat(newPipe);
				}
			},15)
		}
		var createPipe=setInterval(pipeFnc,3000);
	//...............................................
	//碰撞.....................................
		var iscount=false
		function beat(obj){
			var pipeObj=obj;
			if(((bird.offsetLeft+bird.offsetWidth)>=pipeObj.offsetLeft&&
				bird.offsetLeft<=(pipeObj.offsetLeft+pipeObj.offsetWidth)&&
				(bird.offsetTop<=pipeObj.childNodes[0].offsetHeight||392-bird.offsetTop<=pipeObj.childNodes[1].offsetHeight)))
			{
				console.log('碰撞了') 
				isGameOver=true;
				gameover();
			}else if(
				bird.offsetLeft>(pipeObj.offsetLeft+pipeObj.offsetWidth)){
				if(!iscount){
					count++;
					iscount=true;
					// console.log('count:'+count);
					score();
				}
			}
		}
	//................................................	
	//计分.............................
		var imgsNumber=[];
		function score(){
			console.log('enter:score')
			console.log('count.length:'+count.toString().length)
			for(var i=0;i<count.toString().length;i++){
				count.toString().charAt(i);
				console.log('数字:'+count.toString().charAt(i));
				imgsNumber.push(count.toString().charAt(i));
			}
			console.log(imgsNumber)
			scoreBox.innerHTML='';
			for(var j=0;j<imgsNumber.length;j++){
				var scoreImg=document.createElement('img');
				scoreBox.appendChild(scoreImg);
				scoreImg.src='images/'+imgsNumber[j]+'.jpg';
			}
			//让分数居中
			scoreBox.style.marginLeft=-scoreBox.childNodes.length*scoreImg.offsetWidth/2+'px';
			//每次执行完代码后数组清空
			imgsNumber=[];
		}
		
		
	//.................................
	//游戏结束.......................
		var isGameOver=false;
		function gameover(){
			clearInterval(birdTimer1);
			clearInterval(createPipe1);
			var gameoverImg=document.createElement('img');
			gameoverImg.src='images/game_over.jpg';
			gameoverImg.className='gameover';
			box.appendChild(gameoverImg);
			//解绑
			document.onclick=null;
			bird.style.top='392px';
			console.log('sss')
			//创建一个ok键
			var okImg=document.createElement('img');
			okImg.src='images/ok.jpg';
			okImg.className='ok'
			box.appendChild(okImg);
			okImg.onclick=function(){
				okImg.style.display='none';
				window.location.reload();
			}
		}
	//....................................element.onclick=函数名;点击之后执行函数
		if(isStart){
			clearInterval(birdTimer);
			clearInterval(createPipe);
		}
	}