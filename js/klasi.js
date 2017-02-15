//Upplýsingar frá MODB api

let arrayOfMovies = []; // breyta - let því innihaldið er breytilegt 

class Movie {
    constructor (listType, movieList) { 
    	this.listType = listType;
    	this.movieList = movieList;
    }
    render() {
    	
    	let listContainerDOM = document.getElementById(this.listType);
      	for( var i = 0; i < this.movieList.results.length; i++){
      		let moviediv = document.createElement("div")
      		
					moviediv.className = "slide-single";
      		moviediv.innerHTML = 
						'\<div class="hk-card">\
					<img class="hk-card img" src="https://image.tmdb.org/t/p/w780' + this.movieList.results[i].poster_path + '">\
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
		        dots: true
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


class Genre {
	constructor (result) {
		this.id = result.id;
		this.name = result.name;
	}
	
//	genre.findGenreOnId(id){ 
//		arrayOfGenre.ForEach(genre){
//			
//}
//
//  if(genre.id == id){return genre.name}
//}
													
}







