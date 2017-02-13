

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


class MovieGenre {
	genreType() {
		const types = [ // array með öllum mögulegum genre af myndum
			'comedy', // 0
			'action', // 1
			'romance', // 2
			'horror',// 3
			'drama' // 4
		];
	}
}






--------------------------

class Movie { 

		get genre() {
			return ${this.?}	//arrey af möguleikum
		}


	constructor ( {title, year, ratingLevel} = {}) { 
		this.title = data.title;  // title er property
		this.year = data.year;  // year er property
		this.genre = genre.year;  // genre er property
		this.ratingLevel = new ?(); // ratingLevel er property - og verður stillt á milli 1-10
	}
}








class PopularMovies {
	static changeMovie(movie) {
		this.movie = movie;
	}
}

let ? = new movie;



// við notum get - til að retrieves and returns a value //getter er function með engum parameters og verður að return a value
// við notum set - til að assign (or sets) a value


class Movie extends MovieGenre {
	genreType(popular) {
		if(popular) {
			super.genreType();
		}
	}
}





//let MovieBox {}; // úr dæminu - þetta er ekki klasi heldur vara breyta let því innihaldið breytist

/*theMovieBox.common = { //fyrir hvað stendur common
	api_key:"",
	base_uri: "",
	images_uri: "",
	timeout: 5000, //
}

*/
//klasi - geymir upplýsingar en gerir ekkert þangað til við köllum á uppl´tsyngarnar
//með new= .... 