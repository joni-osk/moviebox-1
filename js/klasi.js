function onclick(a,b){
	debugger;
}
class Movie {
  constructor (listType, movieList) { 
		this.listType = listType;
		this.movieList = movieList;
		}
	
		findGenre(ids){
			let genre = []; 
				for(var i = 0; i < ids.length; i++){
					genre.push(arrayOfGenres.filter(function(item){
						return item.id == ids[i]; //returnar objectinu sem hefur sama id og við erum að leita af
					})[0].name); //erum bara að leita af einu í einu
				}
			
			return genre;
		}
	
    render() {
    	
    	let listContainerDOM = document.getElementById(this.listType);
      	for( var i = 0; i < this.movieList.results.length; i++){
      		let moviediv = document.createElement("div")
      		
					moviediv.className = "slide-single";
      		moviediv.innerHTML = 
						'\<div id="' + this.movieList.results[i].id 
					+ '" onclick="onclick()" class="hk-card">\
					<img class="hk-card img" src="https://image.tmdb.org/t/p/w780' + this.movieList.results[i].poster_path + '">\
					<div class="hk-cardTitleDesktop">\
						<span>' + this.movieList.results[i].title + '</span>\
					</div>\
					<div class="hk-undertitle">\
						<span>' + this.findGenre(this.movieList.results[i].genre_ids) + '</span>\
					</div>\
					<div class="hk-ratingCircle">\
						<span>' + this.movieList.results[i].vote_average + '</span>\
					</div>\
				</div>';
      		//moviediv.text = "Movie Title: " + this.movieList.results[i].title;
      		listContainerDOM.appendChild(moviediv);
      	}
      	$(listContainerDOM).slick({
					dots: true,
					infinite: true,
					speed: 400,
					slidesToShow: 4,
					slidesToScroll: 4,
					focusOnSelect: true,
					arrows: true,
					
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
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
							dots: false,
							arrows: false
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
		return this;
	}
														
}







