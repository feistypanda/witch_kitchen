
// this is the superclass for the foods

class Food {
	/**
	 * A function for initializing food objects
	 * @constructor
	 * 
	 * @param {integer} x - The x coordinate in the grid that the food is created at
	 * @param {integer} y - The y coordinate in the grid that the food is created at
	 * @param {boolean} isHeld - determines weather or not the player is holding this food item
	*/

	constructor (x, y, isHeld) {

		this.x = x; // coordinate in the grid
		this.y = y; // coordinate in the grid

		this.isHeld = isHeld; // boolean - is the player holding it
		this.inPot = false; // boolean - is the food item in a pot?
		this.inPan = false; // boolean - is the food item in a pan?

		this.chopedProgress = 0; // float - how choped/prepared is the raw food item? cooked & prepared items should have this to be 1
		this.cookedProgress = 0; // float - how cooked is this item? should be zero if it isnt prepared yet
	}

	/**
	 * A method to run the food item. this includes displaying and updating
	 * the display method will come from the subclass
	 * @returns {object} the food item, this enables linking method calls
	*/
	run () {
		this.update(); // update the food item

		// if it is in a pot/pan/players hands it will be displayed by the pot/pan/playersHands
		if (!this.isHeld && !this.inPot && !this.inPan) this.display(); // display the food item
		
		return this;
		
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