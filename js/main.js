$(function(){
	// nav
	$('.nav-menu .nav > li').hover(function(){
	$(this).find('.slidebox').animate({ opacity:'show', height:'show' },200);
	$(this).find('.item').addClass('navhover');
	}, function() {
		$('.slidebox').stop(true,true).hide();
		$('.item').removeClass('navhover');
	});
	
	

	
	

})
// 轮播图
 $(function()
	{
		 var oli=$('.imgchange .imgbox li');
		 var num=0;
		 var onli=$('.imgchange .button li');
		 
		 onli.click(function()
		{
			var index=$(this).index();
			num=index;
			onli.eq(index).addClass('on').siblings().removeClass('on');
			oli.eq(index).show().siblings().hide();
		
		});
		 
		setInterval(function(){

		 if(num>2)
		 {
		 	
		 	num=0;
		 	oli.eq(num).show().siblings().hide();
			onli.eq(num).addClass('on').siblings().removeClass('on');
		 }
		 else
		 {
		 	
		 	oli.eq(num).show().siblings().hide();
			onli.eq(num).addClass('on').siblings().removeClass('on');
			
		 }
		 	num++;
		},3000);
	})