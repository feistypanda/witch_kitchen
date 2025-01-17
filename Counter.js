/**
 * @class Counter
 * the kitchen apliance lol, food will be put on it and such
**/

class Counter {
	/**
	 * @constructor
	 * this is the constructor function for the counters class
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (x, y) {
		this.position = vector.new(x, y);

		this.holding = false; // what food item/plate is on the counter
	};

	run () {
		this.display();
		this.update();
		
	};

	update () {
		// display the food on this
		if (this.holding) this.holding.display(this.position.x * gridSize + gridSize/2, this.position.y * gridSize + gridSize/2);
	};

	display () {
		processing.image(images.counter, this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);
	};

	
}

