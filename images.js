
let images = (() => {
	return {

		/**
		 * @method
		 * a method to create an image of the player sprite
		 * @returns {obj} a processing.js image of the player
		*/
		witchIcon () {

			// the processing graphics instance that will be drawn in
			let g = processing.createGraphics(400, 400, processing.constants.P2D);

			// the right side of the hat

			g.background(0);
			g.fill(255);
			g.stroke(255);
			g.beginShape();
			g.strokeWeight(30);
			g.vertex(200, 20);
			g.vertex(300, 249);
			g.vertex(200, 249);
			g.endShape(processing.constants.CLOSE);
			g.noStroke();
			g.fill(0);
			g.rect(0, 0, 200, 200);

			let mask = g.get();

			g.background(0, 0, 0, 0);
			g.fill(120, 56, 94);
			g.stroke(120, 56, 94);
			g.beginShape();
			g.strokeWeight(30);
			g.vertex(200, 20);
			g.vertex(300, 249);
			g.vertex(200, 249);
			g.endShape(processing.constants.CLOSE);

			let filling = g.get();

			if (filling) {
			    filling.mask(mask);
			}

			// clear the imaginary screen
			g.background(255, 0);

			// left side of the hat
			g.fill(156, 87, 129);
			g.strokeWeight(30);
			g.stroke(156, 87, 129);
			g.strokeJoin(processing.constants.ROUND);

			g.beginShape();
			g.vertex(200, 20);
			g.vertex(100, 249);
			g.vertex(200, 249);
			g.endShape(processing.constants.CLOSE);

			// display the right side of the hat
			g.image(filling, 0, 0);

			// hair
			g.stroke(79, 45, 33);
			g.strokeWeight(163);

			g.line(153, 304, 168, 265);
			g.line(247, 304, 232, 265);

			// rect mode
			g.rectMode(processing.constants.CENTER);

			// head
			g.noStroke();
			g.fill(186, 157, 132);
			
			g.rect(200, 288, 167, 198, 0, 0, 50, 50);

			// hat rim
			g.fill(156, 87, 129);
			g.rect(200, 250, 320, 33, 25);

			// hat belt
			g.fill(176, 42, 62);
			g.noStroke();

			g.quad(200, 234, 200, 179, 114, 179, 90, 234);

			g.fill(122, 32, 45);

			g.quad(200, 234, 200, 179, 286, 179, 310, 234);

			// hat belt buckle
			g.noFill();
			g.stroke(230, 195, 69);
			g.strokeWeight(12);

			g.beginShape();
			g.vertex(230, 180);
			g.vertex(170, 180);
			g.vertex(170, 227);
			g.vertex(230, 227);
			g.vertex(230, 203.5);
			g.vertex(205, 203.5);
			g.vertex(230, 203.5);
			g.endShape(processing.constants.CLOSE);

			// eyes
			g.noStroke();
			g.fill(48, 3, 3);

			g.ellipse(158, 295, 30, 35);
			g.ellipse(242, 295, 30, 35);

			g.fill(230);

			g.ellipse(165, 291, 6, 8);
			g.ellipse(249, 291, 6, 8);

			// mouth
			g.noFill();
			g.stroke(48, 3, 3);
			g.strokeWeight(10);

			g.arc(200, 343, 54, 38, 20 * processing.constants.PI/180, 160 * processing.constants.PI/180);

			// return the completed image
			return g.get();
		},

		player () {

			let g = processing.createGraphics(600, 600, processing.constants.P2D);
			
			g.randomSeed(15);
			g.fill(252, 208, 146);
			g.strokeWeight(5);

			g.beginShape();
			for (let i = 0; i <= 360 * Math.PI/180; i += 20 * Math.PI/180) {
			    g.vertex(200 + Math.cos(i) * 250/2, 200 + Math.sin(i) * 250/2);
			}
			g.endShape();

			g.fill(140, 76, 115);
			g.beginShape();
			for (let i = 0; i <= 360 * Math.PI/180; i += 15 * Math.PI/180) {
			    g.vertex(200 + Math.cos(i) * 300/2 + Math.random() * 5, 250 + Math.sin(i) * 200/2 + Math.random() * 5);
			}
			g.endShape();

			g.fill(156, 87, 129);

			g.strokeJoin(processing.constants.ROUND);
			g.noStroke();
			g.ellipse(200, 265, 200, 200*2/3 -40);
			g.stroke(156, 87, 129);

			g.beginShape();
			g.vertex(100, 265);
			g.vertex(130, 309);
			g.vertex(165, 380);
			g.vertex(155, 415);
			g.vertex(153, 458);
			g.vertex(172, 478);
			g.vertex(196, 522);
			g.vertex(221, 508);
			g.vertex(224, 479);
			g.vertex(231, 445);
			g.vertex(246, 407);
			g.vertex(275, 355);
			g.vertex(300, 265);
			g.endShape();

			g.fill(120, 56, 94);
			g.stroke(120, 56, 94);
			g.beginShape();
			g.vertex(100, 265);
			g.vertex(130, 309);
			g.vertex(165, 380);
			g.vertex(155, 415);
			g.vertex(153, 458);
			g.vertex(172, 478);
			g.vertex(196, 522);

			g.vertex(195, 452);
			g.vertex(218, 365);
			g.vertex(225, 219);
			g.vertex(179, 219);
			g.vertex(150, 225);
			g.vertex(126, 234);
			g.vertex(108, 247);
			g.vertex(105, 259);
			g.endShape();

			g.noFill();
			g.stroke(0);
			g.beginShape();
			g.vertex(100, 265);
			g.vertex(130, 309);
			g.vertex(165, 380);
			g.vertex(155, 415);
			g.vertex(153, 458);
			g.vertex(172, 478);
			g.vertex(196, 522);
			g.vertex(221, 508);
			g.vertex(224, 479);
			g.vertex(231, 445);
			g.vertex(246, 407);
			g.vertex(275, 355);
			g.vertex(300, 265);
			g.endShape();

			// ellipse(200, 265, 200, 200*2/3 -40);
			g.beginShape();
			for (let i = 180 * Math.PI/180; i <= 362 * Math.PI/180; i += 30 * Math.PI/180) {
			   g.vertex(200 + Math.cos(i) * 200/2, 265 + Math.sin(i) * (200*2/3 - 40)/2);
			}
			g.endShape();

			g.fill(43, 13, 13);

			g.pushMatrix();
			g.translate(150, 129);
			g.rotate(15 * Math.PI/180);
			g.beginShape();
			for (let i = 0; i <= 361 * Math.PI/180; i += 30 * Math.PI/180) {
			    g.vertex(g.cos(i) * 15, g.sin(i) * 18);
			}
			g.endShape();
			g.popMatrix();

			g.pushMatrix();
			g.translate(250, 129);
			g.rotate(-15 * Math.PI/180);
			g.beginShape();
			for (let i = 0; i <= 361 * Math.PI/180; i += 30 * Math.PI/180) {
			    g.vertex(Math.cos(i) * 15, Math.sin(i) * 18);
			}
			g.endShape();
			g.popMatrix();
			return g.get(45, 70, 310, 470);
		},

		/**
		 * @method
		 * a method to create an image of the floor
		 * @returns {obj} a processing.js image of the floor
		*/
		floor () {

			// processing graphics
			let g = processing.createGraphics(600, 600, processing.constants.P2D);

			g.background(117, 117, 117);
			g.noStroke();
			g.randomSeed(38);

			let splotches = [];
			for (let i = 0; i < 250; i ++) {
			    splotches.push([g.random(600), g.random(600)]);
			}

			for (let j in splotches) {
				for (let i = 0; i < 10; i ++) {

				    let r1 = g.random(50);
				    let r2 = g.random(50);
				    let x = splotches[j][0];
				    let y = splotches[j][1];

				    g.fill(r1, r2, (r2 + r1)/2, 3);
				    
				    g.ellipse(x + g.random(50) - 25, y + g.random(50) - 25, g.random(40), g.random(50));
				    g.ellipse(x + g.random(50) - 25, y + g.random(50) - 25, g.random(50), g.random(40));
				}
			}

			g.fill(255, 50);
			g.rect(0, 0, 600, 600);
			g.filter(processing.constants.BLUR, 3);

			return g.get();
		},

		/**
		 * @method
		 * a method to create an image of a wooden counter
		 * @returns {obj} a processing.js image of the counter
		*/
		counter () {

			// processing graphics
			let g = processing.createGraphics(400, 400, processing.constants.P2D);

			g.fill(153, 102, 58);
			g.noStroke();

			g.rect(50, 50, 300, 300);
			g.fill(150, 97, 54);

			g.beginShape();
			g.vertex(50, 50);
			g.vertex(50, 280);
			g.vertex(143, 171);
			g.vertex(224, 190);
			g.vertex(263, 150);
			g.vertex(277, 50);
			g.endShape(processing.constants.CLOSE);

			g.fill(143, 93, 52);

			g.beginShape();
			g.vertex(350, 350);
			g.vertex(136, 350);
			g.vertex(162, 326);
			g.vertex(189, 273);
			g.vertex(234, 288);
			g.vertex(269, 253);
			g.vertex(350, 145);
			g.endShape(processing.constants.CLOSE);

			g.strokeJoin(processing.constants.BEVEL);

			g.noFill();
			g.stroke(133, 60, 0);
			g.strokeWeight(23);

			g.beginShape();
			g.vertex(106, 53);
			g.vertex(350, 47);
			g.vertex(353, 353);
			g.vertex(50, 350);
			g.vertex(53, 53);
			g.endShape(processing.constants.CLOSE);

			g.fill(133, 60, 0);
			g.noStroke();

			g.triangle(50, 100, 257, 100, 50, 116);
			g.triangle(50, 200, 299, 203, 50, 216);
			g.triangle(50, 300, 224, 295, 50, 316);

			g.triangle(350, 150, 161, 148, 350, 166);
			g.triangle(350, 250, 184, 264, 350, 266);
			return g.get(38.5, 38.5, 400 - 74, 400 - 74);
		},
	};
})();