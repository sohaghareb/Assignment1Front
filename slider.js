$(function (){
	var images_container=$('.images_container');
	var l=$('.slide').length*100;
	//console.log('length of image container',l);
	images_container.css({'width':l+"%"});
	var slide_width=(1/$('.slide').length)*100;
	$('.slide').css({'width':slide_width+'%'})
});

$('document').ready(function() {
	$(function(){
		//set interval to slide automatically each 3 seconds
		// var animationSpeed=700;
		// var pause=4000;
		// var width=$(window).width();
		// var currentSlide=0;
		// var slides=$('.slide');
		// setInterval(function(){
		// 	$('.images_container').animate({'margin-left': '-='+width},animationSpeed ,function(){
		// 	++currentSlide;
		// 	if(slides.length <= currentSlide){
		// 		currentSlide=0;
		// 		//console.log(currentSlide,'slides length ',slides.length)
		// 		$('.images_container').css({'margin-left':0});
		// 	}

		// 	});
			

		// },pause);
			

	});
    var currentSlide=0;

     $('.left-button').click(function(){
     	
    	var animationSpeed=700;
		var pause=2000;
		var width=$(window).width();
		var slides=$('.slide');
		$('.images_container').animate({'margin-left': '+='+width},animationSpeed ,function(){
		--currentSlide;
		if(currentSlide <= 0){
			currentSlide= slides.length;
			$('.images_container').css({'margin-left':(-(currentSlide-1)*width)});
		}

		});
		

       
    });
 
  
    $('.right-button').click( function(){ 
    	var animationSpeed=700;
		var pause=2000;
		var width=$(window).width();
		var slides=$('.slide');
		
		console.log(currentSlide,'slides length ',slides.length)
		$('.images_container').animate({'margin-left': '-='+width},animationSpeed ,function(){
		
		if(slides.length === currentSlide){
			currentSlide=0;
			console.log(currentSlide,'slides length ',slides.length)
			$('.images_container').css({'margin-left':0});
		}
		++currentSlide;

		});
			

		
   });


});

