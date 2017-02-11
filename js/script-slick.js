$(document).ready(function(){
  
	$('.ir-cast-slider').slick({
		dots: true,
  	infinite: true,
  	speed: 300,
  	slidesToShow: 4,
  	adaptiveHeight: true
	});
	
	$('.ir-stills-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		arrows: false,
		initialSlide: 1
	});
	
});

