
/**
 * placeholder*/

class Cauldron {
	/**
	 * A function for initializing cauldron objects
	 * @constructor
	 * 
	 * @param {object} holder - the player or counter that is holding this cauldron
	*/
	constructor (holder) {
		this.holder = holder;
		this.holding = false; // the food that is inside of the cualdron
		this.cookDelay = 1000; 

		// for drawing on
		this.g = processing.createGraphics(600, 600);
	}

	run () {
		this.update(); // update the cauldron

		// display not necesary cuz something else will be displaying it
		return this;
	}

	update () {
		if (this.holder) this.holder.holding = this;
		if (this.holder instanceof Burner) {
			this.cook();
		}
	}

	cook () {
		this.cookDelay -= deltaTime; 

		if (this.cookDelay <= 0 && this.holding) {
			this.cookDelay = 1000;
			this.holding.cookedProgress += 0.1;
		}
	}

	display (x, y, width = 50, height = 50) {
		
		processing.image(images.cauldron, x - width/2, y - height/2, width, height)

		if (this.holding) this.holding.display(x, y, width * 0.5, height * 0.5);

		if (this.holding.cookedProgress < 1) {

			this.g.fill(255);
			this.g.noStroke();
			this.g.rect(0, 0, 200, 50);
			this.g.fill(200);
			this.g.rect(10, 10, 180, 30);
			this.g.fill(100, 200, 100);
			this.g.rect(10, 10, 180 * this.holding.cookedProgress, 30);

			let img = this.g.get(0, 0, 200, 50);

			processing.image(img, x - (width/2 - ((width - width * 0.8) / 2)), y + height/2.6, width * 0.8, img.height * width/img.width * 0.8);
		}
	}
}

