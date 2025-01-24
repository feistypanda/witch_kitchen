
// this is the superclass for the foods

class Food {
	/**
	 * A function for initializing food objects
	 * @constructor
	 * 
	 * @param {object} holder - the player, counter, or pot that is holding this food
	*/

	constructor (holder) {

		this.holder = holder;

		this.choppedProgress = 0; // float - how choped/prepared is the raw food item? cooked & prepared items should have this to be 1
		this.cookedProgress = 0; // float - how cooked is this item? should be zero if it isnt prepared yet
	}

	/**
	 * A method to run the food item. this includes displaying and updating
	 * the display method will come from the subclass
	 * @returns {object} the food item, this enables linking method calls
	*/
	run () {
		this.update(); // update the food item

		// display not necesary cuz something else will be displaying it
		return this;
	}

	update () {
		if (this.holder) this.holder.holding = this;
	
	}

	/**
	 * A to string method for the food items
	 * @returns {string} - info on the food
	*/
	toString () {

		let result = ""; // initialize the result string

		// loop through the value key pairs of the food item
		for (const [key, value] of Object.entries(this)) {
			result += `${key}: ${value}, `; // add to the result string
		}
		return result;
	}
}