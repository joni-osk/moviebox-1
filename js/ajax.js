//MODB api
var r = new XMLHttpRequest(); //hluti af javascript
r.open("GET", 'https://api.themoviedb.org/3/discover/movie?api_key=e72b9a3547c05a93b2bd985d1db338fa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
//  alert("Success: " + r.responseText);
	const response = JSON.parse(r.responseText);

	const mostpopular = response.results; // tók út arrey til að fá allar myndirnar en ekki bara eina
	const mpmovie = new Render (mostpopular);
	//const genremovie = new Render (genre);

//console.log(mostpopular);
	//const container = document.createElement("div");
	//const image = document.createElement("img");
	//const title = document.createElement("h1");
	//image.src = "http://image.tmdb.org/t/p/original" + response.backdrop_path;
	//title.innerHTML = response.original_title;
	//container.append(image);
	//container.append(title);
	//document.body.append(container);
	

};
r.send();



//kvikmyndir.is api
var AJAX = new XMLHttpRequest();
AJAX.open("GET", "http://api.kvikmyndir.is/movies", true); // alltaf "GET", - hér skiptir maður út movies fyrir það sem maður vill ná í úr apanum
AJAX.setRequestHeader("x-access-token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGExYTBjYWQxM2U2YmQ4NzJlZjZkZjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhyZWZuYSBLcmlzdGJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJocmVmbmF0aG9yZXlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJocmVmbmF0aCIsInBhc3N3b3JkIjoiJDJhJDA4JHdrRXFFczZUb2R6cjc4LkQ2dFhvT2VnLm9EWmYuRUljWm5NODd0OERBL2g5YmlVTzVoRWRxIiwiZG9tYWluIjoidmVmc2tvbGkuaXMiLCJtZXNzYWdlIjoic21hbGwgc2Nob29sIHByb2RqZWN0IiwiaWF0IjoxNDg2OTg3NDc5LCJleHAiOjE0ODcwNzM4Nzl9.yyipkgLXOypMm2u9hvZWcR50rwsfFhU9yJgewaBKLMc"); // key númerið sem maður fær
AJAX.onreadystatechange = function() {
	if(AJAX.readyState != 4 || AJAX.status != 200) { // 4 - svar frá servernum og fer niður í const response...verður að vera 200 til að fá upplýsingarnar úr apanaum
		return;
	}
	const response = JSON.parse(AJAX.responseText) // const því innihaldið breytist ekki
	// data = AJAX.responseText;
	console.log(response);
};

//AJAX send();



//class AJAX {
//	constructor(url){
//		this.ajax = new XMLHttpRequest();
//		this.url = url;
//		this.result; 
//		this.send = function(){this.ajax.send()};
//		}
//	
//		getJSON(response){ this.result = JSON.parse(response)};
//		
//		isReady(){
//			if (this.ajax.readyState != 4 || this.ajax.status != 200) { return;		
//			}
//			else {
//					getJSON(this.ajax.responseText)
//					console.log(this.result.results);	
//			}
//		}
//	
//	}
//
//
//class KvikmyndirAjax extends AJAX {
//	constructor(url) {
//		super("http://api.kvikmyndir.is/movies");
//		this.RequestHeader = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGExYTBjYWQxM2U2YmQ4NzJlZjZkZjIiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IkhyZWZuYSBLcmlzdGJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJocmVmbmF0aG9yZXlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJocmVmbmF0aCIsInBhc3N3b3JkIjoiJDJhJDA4JHdrRXFFczZUb2R6cjc4LkQ2dFhvT2VnLm9EWmYuRUljWm5NODd0OERBL2g5YmlVTzVoRWRxIiwiZG9tYWluIjoidmVmc2tvbGkuaXMiLCJtZXNzYWdlIjoic21hbGwgc2Nob29sIHByb2RqZWN0IiwiaWF0IjoxNDg2OTg3NDc5LCJleHAiOjE0ODcwNzM4Nzl9.yyipkgLXOypMm2u9hvZWcR50rwsfFhU9yJgewaBKLMc";
//		this.RequestHeaderType = "x-access-token";
//		}
//	
//	makeAjaxCall(){
//		this.ajax.open("GET" ,this.url);
//	this.ajax.setRequestHeader(this.RequestHeader,this.RequestHeader);
//		
//		this.ajax.onreadystatechange = this.isReady();
//		this.ajax.send();
//		console.log(this.result);
//		return (this.ajax.onreadystatechange == true ? this.result: null);
//	}
//}
//
//
//class MdbAjax extends AJAX {
//	constructor(url) {
//		super('https://api.themoviedb.org/3/movie/550?api_key=e72b9a3547c05a93b2bd985d1db338fa');
//		}
//	
//	makeAjaxCall(){
//		this.ajax.open("GET" ,this.url,true);
//		this.ajax.onreadystatechange = this.isReady();
//		this.send();
//		console.log(this.result);
//		return (this.result.results);
//	}
//}
//
//
//let consoleItem = new MdbAjax();
//console.log(consoleItem.makeAjaxCall());
	



