/**
 * @class
 * so basically a subclass of counter that is a burner
*/

class Burner extends Counter {
	/**
	 * @constructor
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (x, y) {
		super (x, y);

		this.holding = false;
	}

	update () {
		
	}

	display () {

		super.display();

		processing.image(images.burner, this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);

		// display the food on this
		if (this.holding) this.holding.display(this.position.x * gridSize + gridSize/2, this.position.y * gridSize + gridSize/2, 35, 35);

		
	}
}