
/**
 * placeholder*/

class Cauldron {
	/**
	 * A function for initializing cauldron objects
	 * @constructor
	 * 
	 * @param {object} holder - the player or counter that is holding this cauldron
	*/
	constructor (holder) {
		this.holder = holder;
		this.holding = false; // the food that is inside of the cualdron
	}

	run () {
		this.update(); // update the cauldron

		// display not necesary cuz something else will be displaying it
		return this;
	}

	update () {
		if (this.holder) this.holder.holding = this;
	
	}

	display (x, y, width = 40, height = 40) {
		processing.fill(0);
		processing.noStroke();
		processing.ellipse(x, y, width, height);

		if (this.holding) this.holding.display(x, y, width * 0.75, height * 0.75);
	}
}

