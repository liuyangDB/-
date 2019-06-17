$(function(){
	
	
	

	
	
	
	
	
	
	
	//导航图片对应
	$(".nav li").mouseover(function(){
		var bjHeight = $(".bj_item").height();
		var _index = $(this).index();
		var item = -bjHeight * _index;
		$(".bj").stop().animate({"top":item+"px"},600);
	})
	
	$(".nav li").mouseout(function(){
		$(".bj").stop().animate({"top":0+"px"},600);
	})
	
	//menu
	$(".nav_close").click(function(){
		$(".nav li").stop().animate({"height":"0"},600);
		$(".nav_box").stop().fadeOut(1000);
		$(".shadow").stop().fadeOut(500);
		$(".nav").stop().delay(1000).animate({"width":"0px"},600);
		
	})
	
	$(".menu").click(function(){
		var winWidth = $(window).width();
		if(winWidth <992){
			$(".shadow").stop().fadeIn();
			$(".nav").stop().delay(600).animate({"width":"100%"},600);
			$(".nav li").stop().delay(1200).animate({"height":"70px"},600);
			$(".nav_box").stop().delay(1500).fadeIn(1000);
		}else{
			$(".shadow").stop().fadeIn();
			$(".nav").stop().delay(600).animate({"width":"65%"},600);
			$(".nav li").stop().delay(1200).animate({"height":"70px"},600);
			$(".nav_box").stop().delay(1500).fadeIn(1000);
		}
	})
	
	//移动端导航
	$(".yd_menu span").click(function(){
		$(".yd_nav").stop().animate({"right":"0px"},600);
		$(".yd_nav .list a").stop().delay(600).animate({"height":"60px"},600);
	})
	$(".navs_close").click(function(){
		$(".yd_nav").stop().animate({"right":"-100vw"},600);
		$(".yd_nav .list a").stop().delay(600).animate({"height":"0px"},600);
	})
	$(".yd_nav .list a").click(function(){
		$(".navs_close").trigger("click");
	})
	
	$(".yd_nav_select p").click(function(){
		if($(this).hasClass('active')){
			$(this).children(".select_box").hide();
			$(this).removeClass("active");
		}else{
			$(this).children(".select_box").show();
			$(this).addClass("active");
		}
	})
	
	
	
	//content切换
	$(".page p").click(function(){
		var _index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".zxjj").eq(_index).addClass("active").slideDown(1000).siblings().removeClass("active").slideUp(1000);
	})
	
	$(window).resize(function(){
		$(".nav li").stop().animate({"height":"0"},300);
		$(".nav_box").stop().fadeOut(500);
		$(".shadow").stop().fadeOut(200);
		$(".nav").stop().delay(300).animate({"width":"0px"},300);
	})	
	
	
	//日期修改
	
	$(".time .date").each(function(){
		var str = String($(this).text());
		var dateStr = str.slice(8);
		$(this).text(dateStr);
		var timeStr = str.substr(0,7);
		$(this).siblings(".month").text(timeStr);
	})
	
	
	
	

})


