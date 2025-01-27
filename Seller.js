class Seller extends Counter {
	/**
	 * @constructor
	 * @param {number} x - the x coordinate in the grid
	 * @param {number} y - the y coordinate in the grid
	 * @param {number} rotation - the rotation in radians
	*/
	constructor (x, y, rotation, returner) {
		super (x, y);
		this.rotation = rotation;
		this.holding = false;
		this.timeSinceLastDelivery = 0;
		this.returner = returner;
	}

	update () {
		if (this.holding) {
			player.money += 50;
			player.money += Math.floor((30 * 1000 - this.timeSinceLastDelivery)/1000)
			this.holding.holder = false;
			this.holding = false;
			this.timeSinceLastDelivery = 0;

			// return the bottle
			this.returner.bottleCount ++;
			console.log(this.returner.bottleCount);

		} else {
			this.timeSinceLastDelivery += deltaTime;
		}

		// penalty for going 20 seconds w/ selling
		if (this.timeSinceLastDelivery >= 30 * 1000) {
			player.money -= 25;
			this.timeSinceLastDelivery = 0;
		}
	}

	display () {

		super.display();

		processing.pushMatrix();
		processing.translate(this.position.x * gridSize + gridSize/2, this.position.y * gridSize + gridSize/2);
		processing.rotate(this.rotation);
		processing.image(images.seller, -gridSize/2, -gridSize/2, gridSize, gridSize);
		processing.rotate( - this.rotation + Math.random() * Math.PI/10 - Math.PI/20)
		if (this.timeSinceLastDelivery >= 24 * 1000) processing.image(images.exclamation, -gridSize/2, -gridSize/2, gridSize, gridSize);
		processing.popMatrix();
	}
}