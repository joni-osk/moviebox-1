/*---Hér fyrir neðan eru classar fyrir Ajax sem virka ekki eins og staðan er---*/


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
	