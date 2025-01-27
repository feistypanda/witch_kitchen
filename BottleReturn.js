
class BottleReturn extends Counter {
	/**
	 * @constructor
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (x, y) {
		super (x, y);

		this.holding = false;
		this.bottleCount = 0;
	}

	update () {
		if (this.bottleCount > 0 && !this.holding) {
			// this.holding = new Bottle(this);
			this.holding = new Bottle(this);
		}
	}

	display () {

		super.display();

		// display the food on this
		if (this.holding) {
			this.holding.display(this.position.x * gridSize + gridSize/2, this.position.y * gridSize + gridSize/2, 60, 60);
		} else {
			processing.image(images.return, this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);
		}

		
	}
}