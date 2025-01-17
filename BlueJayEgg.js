
// alright, time for the first ingredient! lets see... eye of newt!

class BlueJayEgg extends Food {
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
	 * @method
	 * This is the display method for the ingredient eyeOfNewt!
	 * @param {number} x, y - the coordinates (not in the grid)
	 * @param {number} width, height - the dimensions
	*/
	display (x, y, width = 40, height = 40) {
		if (this.choppedProgress < 0.5) {
			processing.fill(100, 100, 200);
			processing.noStroke();
			processing.ellipse(x, y, width, height);
		} else if (this.choppedProgress < 1) {
			processing.fill(100, 100, 200);
			processing.noStroke();
			processing.arc(x, y + 2, width, height, 0, Math.PI);
			processing.arc(x, y - 2, width, height, Math.PI, Math.PI * 2);
		} else {
			processing.fill(100, 100, 200);
			processing.noStroke();
			processing.arc(x + 2, y + 2, width, height, 0, Math.PI/2);
			processing.arc(x - 2, y + 2, width, height, Math.PI/2, Math.PI);
			processing.arc(x - 2, y - 2, width, height, Math.PI, Math.PI * 1.5);
			processing.arc(x + 2, y - 2, width, height, Math.PI * 1.5, Math.PI * 2);
		}
		
	} 
}