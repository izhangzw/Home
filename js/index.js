(function(window, $){
	'use strict';
	
	window.app = {};
	app.loading = 0;
	app.init = function(){};
	app.layout = function(){
		var $w = $(window),
		calculate = function(){
			//nav margin-top
			var mt = - parseInt($('#fp-nav').height()) / 2;
			$('#fp-nav').css('margin-top', mt);
			
			//section page height
			$('section').height(document.body.clientHeight)
		}
		$w.on('resize', calculate)
	};
	app.scrollToHash = function (_this){
		var target = decodeURIComponent(_this.hash);
		if ($(target).length) {
			var scrollpos = $(target).offset().top;
			$("html,body").stop().animate({scrollTop: scrollpos}, 500);
			
		}
	}

	$(function(){
		app.init()
	})
	
})(window, jQuery);

//TODO 初始化页面的时候loading，摆好之后在隐藏loading，准备内容有计算各种高度
//TODO 判断浏览器版本，低版本不能看