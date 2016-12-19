Magnify();
//  图片放大镜函数
function Magnify() {
	var ImgNum = $(".product_intro_imgs li").length;
	$('.product_intro_smimg ul').css("width", ImgNum * 100 + "px");
	var ImgNumber = 0;
	//点击左切换图片
	$(".product_intro_imgs_left").on("click", function() {
			ImgNumber--;
			if(ImgNumber < 3) {
				ImgNumber = ImgNum - 3;
			}
			$(".product_intro_smimg ul").css("margin-left", -ImgNumber * 100 + "px");
			$(".product_intro_bgimg img").attr('src', $(".product_intro_imgs li img")[ImgNumber].src);
		})
		//点击右切换图片
	$(".product_intro_imgs_right").on("click", function() {
			ImgNumber++;
			if(ImgNumber > ImgNum - 3) {
				ImgNumber = 0;
			}
			$(".product_intro_smimg ul").css("margin-left", -ImgNumber * 100 + "px");
			$(".product_intro_bgimg img").attr('src', $(".product_intro_imgs li img")[ImgNumber].src);
		})
		//点击小图片切换图片
	$(".product_intro_imgs li img").on("click", function() {
		ImgNumber = $(this).attr("imgindex");
		console.log($(this).attr("imgindex"));
		$(".product_intro_bgimg img").attr('src', $(this).attr("src"));
		for(var i = 0; i < ImgNum; i++) {
			$(".product_intro_imgs li").eq(i).css("border", "2px solid lightgray");
		}
		$(this).parent().css("border", "2px solid #f69829");
	})

	//放大镜
	$(".product_intro_bgimg img").on("mouseover", function() {
		$(".product_intro_magnifyimg").css("display", "block");
		$(".product_intro_magnifyimg img").attr('src', $(this).attr("src"));
	})
	$(".product_intro_bgimg img").on("mouseout", function() {
			$(".product_intro_magnifyimg").css("display", "none");
		})
		// 放大镜效果
	$(".product_intro_bgimg img").on("mousemove", function() {
		var mouseX = window.event.pageX - $(".product_intro_bgimg").offset().left;
		var mouseY = window.event.pageY - $(".product_intro_bgimg").offset().top;
		if(mouseX > 275) {
			$(".product_intro_magnifyimg img").css({
				"left": "-450px",
			})
		} else if(mouseX < 50) {
			$(".product_intro_magnifyimg img").css({
				"left": "0px",
			})
		} else {
			$(".product_intro_magnifyimg img").css({
				"left": -(mouseX * 2 - 100) + "px",
			})
		}
		if(mouseY > 210) {
			$(".product_intro_magnifyimg img").css({
				"top": "-320px",
			})
		} else if(mouseY < 50) {
			$(".product_intro_magnifyimg img").css({
				"top": "0px",
			})
		} else {
			$(".product_intro_magnifyimg img").css({
				"top": -(mouseY * 2 - 100) + "px",
			})
		}
	})
}