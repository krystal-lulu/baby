
var clickleft=document.getElementsByClassName('clickleft');
var rightcontent=document.getElementsByClassName('rightcontent');
var About_nobi2=document.getElementsByClassName('About_nobi2');
var About_nobi=document.getElementsByClassName('About_nobi');
var span=document.getElementsByClassName('span');


for (var i = 0; i < clickleft.length; i++) {
	clickleft[i].index=i;

	clickleft[i].onmouseover=function(){
		for (var i = 0; i < rightcontent.length; i++) {
			About_nobi2[i].style.opacity=0;
			About_nobi[i].style.opacity=1;
			span[i].style.color='#0068b5';
		}
		About_nobi2[this.index].style.opacity=1;
		About_nobi[this.index].style.opacity=0;
		span[this.index].style.color='white';
	}
	clickleft[i].onclick=function(){
		for (var i = 0; i < rightcontent.length; i++) {
			rightcontent[i].style.display='none';
			About_nobi2[i].style.opacity=0;
			About_nobi[i].style.opacity=1;
			span[i].style.color='#0068b5';
		}
		rightcontent[this.index].style.display='block';
		About_nobi2[this.index].style.opacity=1;
		About_nobi[this.index].style.opacity=0;
		span[this.index].style.color='white';	
		
	}
}

// 











// 轮播图
var imgbox=document.getElementsByClassName('About_imgs_box')[0];
var imgs=document.querySelectorAll('.About_imgs_box a img');
console.log(imgs.length)
var title=document.getElementsByClassName('title')[0];
var allli=document.getElementsByClassName('allli');
var ul=document.getElementsByClassName('ul')[0];
var btn=document.getElementsByClassName('About_btn');
var stop=document.getElementsByClassName('About_cut_pic');
var index=0;
var timer=setInterval(function(){
	index++;
 	changeIndex();
},4000)
function changeIndex(){
			if (index == imgs.length) {
				index = 0;
			}
			if (index == -1) {
				index = imgs.length-1 ;
			}
			imgbox.style.marginLeft = -150*index+'px';
			ul.style.marginLeft = -210*index+'px';
}
for(var i = 0; i < 2; i++){
			btn[i].index = i;
			btn[i].onclick = function(){
				if (this.index == 0) {
					index--;
					changeIndex();
				}
				if (this.index == 1) {
					index++;
					changeIndex();
				}
				console.log(index)
			};
}

