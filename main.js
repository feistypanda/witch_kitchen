
// incorporate the processingJS library

let programCode = function (processingInstance) {
with (processingInstance) {

// setup
size(600, 600, P2D);
frameRate(60);

// this object stores functions that call the processing drawing functions from the processing environment so that these functions can be used in different files
// it also stores the processing constants
processing = (() => {
	return {
		fill (...args) {
			return fill(...args);
		},

		rect (...args) {
			return rect(...args);
		},

		ellipse (...args) {
			return ellipse(...args);
		},

		stroke (...args) {
			return stroke(...args);
		},

		strokeWeight (...args) {
			return strokeWeight(...args);
		},

		noStroke () {
			return noStroke();
		},

		lerp (...args) {
			return lerp(...args);
		},

		image (...args) {
			return image(...args);
		},

		createGraphics (...args) {
			return createGraphics(...args);
		},

		pushMatrix (...args) {
			return pushMatrix(...args);
		},

		popMatrix (...args) {
			return popMatrix(...args);
		},

		translate (...args) {
			return translate(...args);
		},

		rotate (...args) {
			return rotate(...args);
		},

		arc (...args) {
			return arc(...args);
		},

		constants: PConstants,
	};
})();

counters.add(new Counter(3, 3));
counters.add(new Counter(3, 4));
counters.add(new Counter(4, 3));
counters.add(new FoodCrate(EyeOfNewt, 5, 3));
counters.add(new FoodCrate(BlueJayEgg, 5, 4));
counters.add(new TrashCan(4, 5));
counters.add(new CuttingBoard(4, 6));
counters.add(new Burner(5, 6));

draw = function () {
	
	[mouse.x, mouse.y] = [mouseX, mouseY];

	deltaTime = 1000/this.__frameRate;

	// if we are still loading, exit the function
	if (!load.run()) return;

	// run the current scene
	scenes.runCurrentScene();
	
	click = false;
};

// event handlers
(() => {
	mousePressed = function () {
		click = true;
	};

	keyPressed = function () {
		keys[keyCode] = keys[key.toString().toLowerCase()] = true;
	}

	keyReleased = function () {
		keys[keyCode] = keys[key.toString().toLowerCase()] = false;
	}
})();

};};

// create the processing instance & attatch it to the canvas

let canvas = document.querySelector("#mycanvas"); 
let processingInstance = new Processing(canvas, programCode);