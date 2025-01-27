

class Bottle {
	/**
	 * A function for initializing bottle objects
	 * @constructor
	 * 
	 * @param {object} holder - the player or counter that is holding this bottle
	*/
	constructor (holder) {
		this.holder = holder;
		this.holding = []; // the ingredients inside of the bottle

		// for drawing on
		this.g = processing.createGraphics(600, 600);

		this.potionType = false; // the identified type of potion
	}

	run () {
		this.update(); // update the bottle

		// display not necesary cuz something else will be displaying it
		return this;
	}

	update () {
		if (this.holder) this.holder.holding = this;
	}

	/**
	 * @method
	 * call whenever a new ingredient is added
	 * updates the potion currently inside of the bottle
	*/
	updateIngredients () {
		for (let potion of Object.keys(potions)) {
			let ingredients = [...potions[potion].ingredients];
			for (let i in this.holding) {
				for (let j of ingredients) {
					if (this.holding[i] instanceof j) {
						ingredients.splice(ingredients.indexOf(j), 1);
						break;
					}
				}
			}

			if (ingredients.length <= 0) {
				this.potionType = potions[potion].name;
				break;
			}
		}
	}

	display (x, y, width = 50, height = 50) {

		this.g.background(0, 0);

		if (this.potionType) {
			this.g.noStroke();
			this.g.fill(potions[this.potionType].color);
			this.g.ellipse(200, 239, 300, 300);
		}

		// the ingredients in the potion (incomplete potion)
		if (this.holding.length < 3 || !this.potionType) {

			let toRad = Math.PI/180;
			let amts = [[24 * toRad, 159* toRad], [-18 * toRad, 200 * toRad], [-90 * toRad, 90000 * toRad]];
			
			for (let j = this.holding.length - 1; j >= 0; j --) {

				let k = this.holding[j];
				let c = k.mainCookedColor;

				this.g.noStroke();
				this.g.fill(c);

				this.g.beginShape();
				
				for (let i = amts[j][0]; i < amts[j][1]; i += 5 * toRad) {
				    this.g.vertex(200 + Math.cos(i) * 150, 239 + Math.sin(i) * 150);
				}
				this.g.endShape();
				
			}
		}

		// display the potion contents
		processing.image(this.g.get(0, 0, 400, 400), x - width/2, y - height/2, width, height);
		
		// the glass bottle
		let toRad = Math.PI/180;

		this.g.background(0, 0);
		this.g.noStroke();
		this.g.fill(184, 80, 0);
		this.g.beginShape();
		this.g.vertex(159, 115);
		this.g.vertex(154, 110);
		this.g.vertex(140, 46-20);
		this.g.vertex(156, 56-31);
		this.g.vertex(178, 59-32);
		this.g.vertex(200, 60-28);
		this.g.vertex(222, 59-28);
		this.g.vertex(244, 56-32);
		this.g.vertex(257, 46-20);
		this.g.vertex(244, 109);
		this.g.vertex(239, 115);
		this.g.endShape();

		this.g.noFill();
		this.g.stroke(107, 218, 255);
		this.g.strokeWeight(5);
		this.g.arc(200, 239, 300, 300, -70 * toRad , 250 * toRad);
		this.g.beginShape();
		this.g.fill(107, 218, 255, 100);
		this.g.vertex(149, 98);
		this.g.vertex(140, 46);
		this.g.vertex(156, 56);
		this.g.vertex(178, 59);
		this.g.vertex(200, 60);
		this.g.vertex(222, 59);
		this.g.vertex(244, 56);
		this.g.vertex(257, 46);
		this.g.vertex(248, 97);
		this.g.endShape();
		this.g.noStroke();
		this.g.ellipse(200, 239, 300, 300);

		let img = this.g.get(0, 0, 400, 400);

		processing.image(img, x - width/2, y - height/2, width, height);
		
	}
}

