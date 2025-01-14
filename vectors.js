
let vector = (() => {
	return {
		// create a new vector with x and y parts
		new (x, y) {
			return {x, y};
		},

		add (vec1, vec2) {
			return vector.new(vec1.x + vec2.x, vec1.y + vec2.y);
		},

	    mult (vec, amt)  {
	        return vector.new(vec.x * amt, vec.y * amt);
	    },

    	sub (vec1, vec2) {
	        return vector.new(vec1.x - vec2.x, vec1.y - vec2.y);
	    },

    	clone (vec) {
	        return vector.new(vec.x, vec.y);
	    },

	    lerp (vec1, vec2, amt) {
	        return vector.new(processing.lerp(vec1.x, vec2.x, amt), processing.lerp(vec1.y, vec2.y, amt));
	    },

	    mag (vec) {
	    	return Math.sqrt(vec.x * vec.x + vec.y * vec.y)
	    },

	    norm (vec, mag = vector.mag(vec)) {
	    	return vector.new(vec.x/mag, vec.y/mag);
	    },

	};
})();