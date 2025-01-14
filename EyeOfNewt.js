
// alright, time for the first ingredient! lets see... eye of newt!

class EyeOfNewt extends Food {
	/**
	 * This is the subclass for the ingredient eyeOfNewt!
	 * @constructor
	 * @param {integer} x - The x coordinate in the grid that the food is created at
	 * @param {integer} y - The y coordinate in the grid that the food is created at
	 * @param {boolean} isHeld - determines weather or not the player is holding this food item
	*/

	constructor (...args) {
		super(...args);
	}

	/**
	 * This is the display method for the ingredient eyeOfNewt!
	*/
	display () {
		processing.fill(255, 100, 0);
		processing.noStroke();
		processing.ellipse(this.x, this.y);
	}
}