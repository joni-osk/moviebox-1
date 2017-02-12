$(".rating-slider")
    .slider({
				min: 0,
				max: 10,
				range: true,
				values: [0,10]
	
		})
    .slider("pips", {
        first: "lable",
				last: "lable",
				rest: false,
				step: 5
				
    })
    .slider("float", {
        handle: true
    });