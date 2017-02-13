let MovieBox {}; // úr dæminu - þetta er ekki klasi heldur vara breyta let því innihaldið breytist

theMovieBox.common = { //fyrir hvað stendur common
	api_key:"",
	base_uri: "",
	images_uri: "",
	timeout: 5000, //
}


//klasi - geymir upplýsingar en gerir ekkert þangað til við köllum á uppl´tsyngarnar
//með new= .... 