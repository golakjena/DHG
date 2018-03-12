;(function($){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function mobileNav(){
		$(".mobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(".topNav").slideDown();
				$("body").css({
					overflowY:"hidden"
				});
			}
			else{
				$(".topNav").slideUp();	
				$("body").css({
					overflowY:"auto"
				});
			}
			return false;
		});
	}
	function textEffectLeft(){
		$(".txtEffectLeft").css({opacity:0});
		$(".txtEffectLeft").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {bottom:-150, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}
	function textEffectRight(){
		$(".txtEffectRight").css({opacity:0});
		$(".txtEffectRight").each(function(){
			$(this).waypoint(function() {
	            $(this).css({opacity:1});
	            
	            TweenMax.from($(this), 1, {bottom:-150, opacity:0, delay:0.1, ease:Expo.easeOut, force3D:true}, 0.2);
	        },{
	            offset: '85%',
	            triggerOnce: true
	        });
		});
	}

	$(function(){
		mobileNav();
		if(!device){
			textEffectLeft();
			textEffectRight();
		}
	});

})(jQuery);




