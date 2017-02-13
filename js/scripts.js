$(document).ready(function(){
	$('.superslider').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4.03,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.03,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.03,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.03,
        slidesToScroll: 1,
		dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

}); // lokar .superslider


// Ef annar slider þá kemur hann hér:




});





