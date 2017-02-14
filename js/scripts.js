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

//method er bara function sem tilheyrir classa:

	genreOfMovie() {
		console.log (this.genre + "");
	}

// til þess að nota classann: 
// Hér fyrir neðan er ég að kalla á keyword - og þannig ná í upplýsingar úr constructor-num:

//breyta: let - því innihaldið getur breyst
//breytan movieGenre geymir arrey af mögulegum genre tegundum
let movieGenre = new movie ([ //ath á að vera lítið m hér?
	'comedy', // 0
	'action', // 1
	'romance', // 2
	'horror',// 3
	'drama', // 4
	'popular'// 5
	]); {

// nú veður að kalla á let


}; 

}


// til þess að nota extend - þarf að búa til annan classa með constructor

class = popular {
	//constructorinn tekur inn það sama og classinn Movie
	constuctor(title, year, genre, ratingLevel) { 

// hér væri hægt að copy-pasta það sem er í movie structornum (this.title...)
//en fljótlegri leið er að nota super method ið:

super.(title, year, genre, ratingLevel);

	}
}

// til þess að nota þetta verðum við að fara út fyrir class ann og búa til breytu
//og svo væntanæega get























let comedy = movieGenre.comedy;
return(); //

let action = movieGenre.action;
return(); //

let romance = movieGenre.romance;
return(); //

let horror = movieGenre.horror;
return(); //

let drama = movieGenre.drama;
return(); //

let popular = movieGenre.popular;
return(); //

//þarf að nota extends

//þarf að vinna með for loop

*/