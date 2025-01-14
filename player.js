
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

		holding: false, // what food item / plate / pot / pan the player is holding

		speed: 5, // how fast is the player?

		imageOffset: vector.new(-155, -130),

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

			if (!this.imageScale) {
				this.imageScale = this.imageDimensions.x / images.player.width;
			}

			let imageWidth = this.imageDimensions.x;
			let imageHeight = images.player.height * this.imageScale;
			
			// draw the image of the player
			processing.image(images.player, 
				this.position.x + this.imageOffset.x * this.imageScale, 
				this.position.y + this.imageOffset.y * this.imageScale, 
				imageWidth, 
				imageHeight
				);
			
			processing.fill(255, 0, 0, 100);
			processing.rect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
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
			this.position = vector.add(this.position, velocity);
		},
	};
})();