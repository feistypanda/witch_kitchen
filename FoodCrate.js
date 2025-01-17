
/**
 * @class
 * so basically a subclass of counter that is a food crate
*/

class FoodCrate extends Counter {
	/**
	 * @constructor
	 * @param {obj} type - the food item that will be given out
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (type, x, y) {
		super (x, y);

		this.type = type;
		this.holding = new this.type();
		// just to draw on
		this.g = processing.createGraphics(600, 600, processing.constants.P2D);
	}

	update () {
		if (!this.holding) {
			this.holding = new this.type();
		}
		
	}

	display () {

		super.display();

		this.g.background(0, 0);
		this.g.strokeWeight(23);
		this.g.fill(230, 193, 166, 200);
		this.g.stroke(133, 60, 0);
		this.g.beginShape();
		this.g.vertex(200, 120);
		this.g.vertex(120, 120);
		this.g.vertex(124, 275);
		this.g.vertex(287, 280);
		this.g.vertex(282, 127);
		this.g.vertex(200, 120);
		this.g.endShape();
		processing.image(this.g.get(0, 0, 400, 400), this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);
		if (this.holding.display) this.holding.display(this.position.x * gridSize + gridSize/2, this.position.y * gridSize + gridSize/2, 20, 20);
	}
}