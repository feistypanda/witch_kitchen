/**
 * @class
 * so basically a subclass of counter that is a cutting board
*/

class CuttingBoard extends Counter {
	/**
	 * @constructor
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	*/
	constructor (x, y) {
		super (x, y);

		this.holding = false;
		this.chopDelay = 200; // milliseconds
		this.chopping = false; // do we display the chopping animation
	}

	update () {
		this.chopping = false;

		if (player.selecting === this && keys.e) {
			this.chop();
		}
	}

	chop () {

		if (this.holding && this.holding.choppedProgress < 1) {
			this.chopping = true;
			this.chopDelay -= deltaTime;
			if (this.chopDelay <= 0) {
				this.chopDelay = 200;
				this.holding.choppedProgress += 0.2;
				this.holding.choppedProgress = Math.min(this.holding.choppedProgress, 1);
			}
		}
	}

	display () {

		super.display();

		processing.image(images.cuttingBoard, this.position.x * gridSize, this.position.y * gridSize, gridSize, gridSize);

		// display the food on this
		if (this.holding) this.holding.display(this.position.x * gridSize + gridSize/2 - 7, this.position.y * gridSize + gridSize/2, 35, 35);

		if (!this.chopping) {
			processing.image(images.cleaver, this.position.x * gridSize + 5, this.position.y * gridSize + 7, images.cleaver.width/9.5, images.cleaver.height/9.5);
		} else {

			let x = this.position.x * gridSize + 5 + images.cleaver.width/19;
			let y = this.position.y * gridSize + 7 + images.cleaver.width/19;

			let amt = 1 - this.chopDelay/200;
			amt = amt > 0.5 ? 1 - amt : amt;

			processing.pushMatrix();
			processing.translate(x, y + 100 * easeFunction(amt));
			processing.image(images.cleaver, - images.cleaver.width/19, - images.cleaver.width/19, images.cleaver.width/9.5, images.cleaver.height/9.5);
			processing.popMatrix();

		}
	}
}