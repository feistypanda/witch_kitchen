/**
 * @class
 * a trshcan that disposes of the food put into it
*/

class TrashCan extends Counter {
	/**
	 * @constructor
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (x, y) {
		super (x, y);
		
		this.holding = false;

		// just to draw on
		this.g = processing.createGraphics(600, 600, processing.constants.P2D);
	}

	update () {
		if (this.holding) {
			this.holding = false;
		}
		
	}

	display () {

		super.display();

		this.g.background(0, 0);
		this.g.strokeWeight(23);
		this.g.fill(69, 37, 11);
		this.g.stroke(133, 60, 0);

		this.g.beginShape();
		this.g.vertex(105, 300);
		this.g.vertex(295, 300);
		this.g.vertex(300, 100);
		this.g.vertex(100, 105);
		this.g.endShape(processing.constants.CLOSE);
		this.g.endShape();

		processing.image(this.g.get(0, 0, 400, 400), this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);
	}
}
