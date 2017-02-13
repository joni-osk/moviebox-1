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


// classar efst í kóðanum - before other codes use them
// Inni í class skilgreinum við methods 
class Movie { 
	// fyrsta sem við gerum er að gera constructor
	// kóðinn sem lifir inni í constuctornum geymir upplýsingar, en gerir ekkert
	//þangað til við köllum á þær upplýsingar með new keyword (new = ....) 
	//sem lifir fyrir utan constructor-inn
	

	// fyrri slaufusvíginn er object - sem hefur (seinni slaufusviginn) 
	// tómt properties sem default stillingu
	// classinn Movie hefur þannig fjóra parameters 
	//(title, year, genre og ratingLeval)
	constructor ( {title, year, genre, ratingLevel} = {}) { 
		this.title = data.title;  // title er property
		this.year = data.year;  // year er property
		this.genre = data.genre;  // genre er property
		// ratingLevel er property - og verður stillt á milli 1-10		
		this.ratingLevel = data.ratingLevel; 
	}
}

// Hér er ég að kalla á keyword - og þannig ná í upplýsingar úr constructor-num:

//breyta: let - því innihaldið getur breyst
// inn í slaufusviganum á að koma object
let movieGenre = new movie ([
	'comedy', // 0
	'action', // 1
	'romance', // 2
	'horror',// 3
	'drama' // 4
	]); {


}; 


