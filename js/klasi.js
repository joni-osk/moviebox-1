/*
// classar efst í kóðanum - before other codes use them
// Inni í class skilgreinum við methods 
class MostpopularMovie { 
	// fyrsta sem við gerum er að gera constructor
	// kóðinn sem lifir inni í constuctornum geymir upplýsingar, en gerir ekkert
	//þangað til við köllum á þær upplýsingar með new keyword (new = ....) 
	//sem lifir fyrir utan constructor-inn
	

	// fyrri slaufusvíginn er object - sem hefur (seinni slaufusviginn) 
	// tómt properties sem default stillingu
	// classinn Movie hefur þannig fjóra parameters 
	//(title, year, genre og ratingLeval)
	constructor ( mostpopular) { 
		this.mostpopular = mostpopular;  // title er property
		//this.release_date = release_date;  // year er property
		//this.genre = genre;  // genre er property
		// ratingLevel er property - og verður stillt á milli 1-10		
		//this.ratingLevel = data.ratingLevel;
	}
}

class Render extends MostpopularMovie{ 
	constructor ( mostpopular) {
	super ( mostpopular)
	for (var i = 0; i < mostpopular.length; i++) {
		console.log(mostpopular[i].original_title + " " + mostpopular[i].release_date + " " + mostpopular[i].genre_ids + " " + mostpopular[i].vote_average);
	

	}
//document.createElementbyID('mostpopular');
//let movieTitle = document.getElementbyID('original_title');{



let movieTitle = document.createElement("original_title");
    movieTitle.innerHTML = "";
    render.appendChild(movieTitle);





renderfrontpage = function(data) {
	document.getElementById('popular01');
	document.body.appendChild (this.title);
}



renderdetails = function(data) {

}



class Movietitle { 
	// fyrsta sem við gerum er að gera constructor
	// kóðinn sem lifir inni í constuctornum geymir upplýsingar, en gerir ekkert
	//þangað til við köllum á þær upplýsingar með new keyword (new = ....) 
	//sem lifir fyrir utan constructor-inn
	

	// fyrri slaufusvíginn er object - sem hefur (seinni slaufusviginn) 
	// tómt properties sem default stillingu
	// classinn Movie hefur þannig fjóra parameters 
	//(title, year, genre og ratingLeval)
	constructor ( movietitle) { 
		this.movietitle = movietitle;  // title er property
		//this.release_date = release_date;  // year er property
		//this.genre = genre;  // genre er property
		// ratingLevel er property - og verður stillt á milli 1-10		
		//this.ratingLevel = data.ratingLevel;
	}
}











// til þess að nota ajax skjalið - eða e-h annarsstaðar - einfalda vinnuna annars starðar 




// Hér er ég að kalla á keyword - og þannig ná í upplýsingar úr constructor-num:

//breyta: const a 
// inn í slaufusviganum á að koma object
const movieGenre = new movie (

	); {

}; 







const movieRating = new rating ([
	'1', // 0
	'2', // 1
	'3', // 2
	'4',// 3
	'5' // 4
	'6', // 5
	'7', // 6
	'8', // 7
	'9',// 8
	'10' // 9
	]); {

}; 

class rating {
	constructor(rating){
		this.id = genre.id;
		this.number = genre.number;
		return this;
	}
}

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


//klasi - geymir upplýsingar en gerir ekkert þangað til við köllum á uppl´tsyngarnar
//með new= .... 

*/

//breyting.



//Upplýsingar frá MODB api //tilraun 1

let arrayOfMovies = []; // breyta - let því innihaldið er breytilegt 



class Genre {
	constructor (result) {
		this.id = result.id;
		this.name = result.name;
	}
}




class Movie {
      
    //(title, year, genre og ratingLeval)
    constructor ( listType, movieList) { 
    	this.listType = listType;
    	this.movieList = movieList;

    }

    
    render() {
    	console.log("test");
    	let listContainerDOM = document.getElementById(this.listType);
      	for( var i = 0; i < this.movieList.results.length; i++) //for loop a 
        {
        	//console.log(this.movieList.results[i].title);
      		let moviediv = document.createElement("div")
      		moviediv.className = "slide-single";
      		moviediv.innerHTML = '\
				<div class="hk-card">\
					<img class="hk-card img" src="https://image.tmdb.org/t/p/w500' + this.movieList.results[i].poster_path + '">\
					<div class="hk-cardTitleDesktop">\
						<span>' + this.movieList.results[i].title + '</span>\
					</div>\
					<div class="hk-undertitle">\
						<span>' + this.movieList.results[i].genre_ids + '</span>\
					</div>\
					<div class="hk-acters">\
						<span>Felicity Jones Diego Luna Forest Whitaker</span>\
					</div>\
					<div class="hk-ratingCircle">\
						<span>' + this.movieList.results[i].vote_average + '</span>\
					</div>\
				</div>';
      		//moviediv.text = "Movie Title: " + this.movieList.results[i].title;
      		listContainerDOM.appendChild(moviediv);
      	}
      	$(listContainerDOM).slick({
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

		});

    }	
} 








