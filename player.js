
// the player object yay

let player = (() => {
	return {
		position: vector.new(0, 0), // the position of the player

		imageDimensions: vector.new(70, 70), // the dimensions of the player 

		// used for collisions
		boundingBox : {

			/**
			 * @returns the x coordinate of the upper left corner of the boundingBox
			*/
			get x () {
				// use the y coordinate cuz thats where the head is
				// +2 is for calibration cuz its not exact for some reason
				return player.position.x + player.imageOffset.y * player.imageScale + 2;
			},

			/**
			 * @returns the y coordinate of the upper left corner of the boundingBox
			*/
			get y () {
				return player.position.y + player.imageOffset.y * player.imageScale;
			},

			set x (x) {
				player.position.x = x - (player.imageOffset.y * player.imageScale + 2);
			},

			set y (y) {
				player.position.y = y - player.imageOffset.y * player.imageScale;
			},

			/**
			 * @returns the width of the boundingBox
			*/
			get width () {
				return 250 * player.imageScale;
			},
			/**
			 * @returns the height of the boundingBox
			*/
			get height () {
				return 250 * player.imageScale;
			},
		},

		angle: 0, // the angle that the player is rotated at

		holding: false, // what food item / plate / pot / pan the player is holding

		speed: 5, // how fast is the player?

		imageOffset: vector.new(-155, -130),

		selecting: false, // the counter that is being selected

		/** 
		 * method that handles drawing + updating 
		*/
		run () {
			this.update();
			this.display();
		},

		/**
		 * method to display the player
		 * @param {number} x - optional x coordinate
		 * @param {number} y - optional y coordinate
		*/
		display () {

			if (this.holding) this.holding.display(this.position.x + Math.cos(this.angle - Math.PI/2) * 50, this.position.y + Math.sin(this.angle - Math.PI/2) * 50);

			// calculate the image scale if it hasnt already been calculated
			if (!this.imageScale) {
				this.imageScale = this.imageDimensions.x / images.player.width;
			}

			// calculate the width and height of the player sprite image
			let imageWidth = this.imageDimensions.x;
			let imageHeight = images.player.height * this.imageScale;

			processing.pushMatrix();

			processing.translate(this.position.x, this.position.y);
			processing.rotate(this.angle);
			
			// draw the image of the player
			processing.image(images.player, this.imageOffset.x * this.imageScale, this.imageOffset.y * this.imageScale, imageWidth, imageHeight);

			processing.popMatrix();

			// // temporary hitbox
			// processing.fill(255, 0, 0, 100);
			// processing.rect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
		},

		/**
		 * method to move the player on the x & y axis and do collisions
		 * @param {obj} velocity - the movement on the player this frame
		*/
		move (velocity) {

			this.position.x += velocity.x; // move x

			// collisions x
			if (this.checkCollisions().length > 0) {
				this.resolveCollisions("x", this.checkCollisions(), velocity);
			}

			this.position.y += velocity.y; // move y

			// collisions y
			if (this.checkCollisions().length > 0) {
				this.resolveCollisions("y", this.checkCollisions(), velocity);
			}
		},

		/**
		 * A method that resolves the colisions of the player and counter in a specific axis
		 * @param {string} direc - the axis to resolve collisions on
		 * @param {array} coliding - the counters that the player is colliding with
		*/

		resolveCollisions (direc, coliding, velocity) {

			for (let counter of coliding) {

				let direcToDimensionMap = {
		            "x": "width",
		            "y": "height",
		        };

				if (velocity[direc] > 0) {

	                this.boundingBox[direc] = counter.position[direc] * gridSize - this.boundingBox[direcToDimensionMap[direc]];

	            } else if (velocity[direc] < 0) {

	                this.boundingBox[direc] = counter.position[direc] * gridSize + gridSize;

	            }
	        }
		},

		/**
		 * A method that finds all of the counters that the player is colliding with
		 * @returns {array} the list of counters that the player is colliding with
		*/
		checkCollisions () {

			let found = [];

			for (let i in counters.counters) {
				// AABB collisions
				let counter = counters.counters[i];
				let cp = vector.mult(counter.position, gridSize);
				let px = this.boundingBox.x;
				let py = this.boundingBox.y;
				let pw = this.boundingBox.width;
				let ph = this.boundingBox.height;
				let gs = gridSize;

				if (px + pw > cp.x && cp.x + gs > px && py + pw > cp.y && cp.y + gs > py) {
					found.push(counter);
				}
			}

			return found;
		},

		/**
		 * method to update the player
		 * moving and such
		*/
		update () {

			let velocity = vector.new(0, 0);

			let movementSpeed = this.speed * (deltaTime/(1000/60));

			// movement
			if (keys.w) velocity.y -= movementSpeed;
			if (keys.s) velocity.y += movementSpeed;
			if (keys.a) velocity.x -= movementSpeed;
			if (keys.d) velocity.x += movementSpeed;

			// make it go the same speed, even on diagonals
			let speed = vector.mag(velocity); // how fast we are actually going

			if (speed > movementSpeed) velocity = vector.mult(vector.norm(velocity, speed), movementSpeed);

			// move the player
			this.move(velocity);

			// now to rotate it to face the mouse
			this.angle = Math.atan2(this.position.y - mouse.y, this.position.x - mouse.x) - Math.PI/2;

			// find out which coordinates in the grid the mouse is hovering over
			let xOfSelectedSquare = mouse.x - mouse.x % gridSize;
			let yOfSelectedSquare = mouse.y - mouse.y % gridSize;

			// the player can only select a tile if its center is less than 1.5 * gridsize away from the center of the tile
			let canSelect = (() => {
				let distX = this.boundingBox.x + this.boundingBox.width/2 - (xOfSelectedSquare + gridSize/2);
				let distY = this.boundingBox.y + this.boundingBox.height/2 - (yOfSelectedSquare + gridSize/2);

				return (distX * distX) + (distY * distY) < (gridSize * 1.5) * (gridSize * 1.5);
			})();

			let tileSelected = counters.find(xOfSelectedSquare/gridSize, yOfSelectedSquare/gridSize);
			this.selecting = false; // reset which counter we are selecting
			if (tileSelected) {
				processing.fill(250, 0, 0, 100); // red; to far
				

				if (canSelect) {
					this.selecting = tileSelected;
					processing.fill(250, 243, 105, 100); // yellow; good
				}

				processing.noStroke();
				processing.rect(xOfSelectedSquare, yOfSelectedSquare, gridSize, gridSize);
			}

			if (click && this.selecting) {
				if (!this.holding && this.selecting.holding) {
					this.holding = this.selecting.holding;
					this.selecting.holding = false;
					this.holding.holder = this;
				} else if (this.holding && !this.selecting.holding && (!(this.selecting instanceof Burner) || this.selecting instanceof Cauldron)) {
					this.selecting.holding = this.holding;
					this.holding = false;
					this.selecting.holding.holder = this.selecting;
				}
				
			}

		},
	};
})();