 $(function(){

				/*======next======*/
				$(".btnlr .right_btn_a").click(function(){nextscroll() });

				function nextscroll(){

						var vcon = $(".hsfx");
						var offset = ($(".hsfx .hsul").width())*-1;
						
						vcon.stop().animate({left:offset},"slow",function(){

							 var firstItem = $(".hsfx .bbbox .hsul").first();
							 vcon.find(".bbbox").append(firstItem);
							 $(this).css("left","0px");

							 //circle()
							
						});  
					
				};



				//setInterval(nextscroll,2000)
				 
				/*======prev======*/
				$(".btnlr .left_btn_a").click(function(){

						var vcon = $(".hsfx");
						var offset = ($(".hsfx .hsul").width()*-1);

						var lastItem = $(".hsfx .bbbox .hsul").last();
						vcon.find(".bbbox").prepend(lastItem);
						vcon.css("left",offset);
						vcon.animate({left:"0px"},"slow",function(){
							 //circle()
						})

				 });

			
		 })
  