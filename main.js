
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

		color (...args) {
			return color(...args);
		},

		constants: PConstants,
	};
})();

// load all of the potions
for (let key of Object.keys(potions)) {
	potions[key] = potions[key]();
}

// the level
counters.add(new TrashCan(0, 3));
counters.add(new Counter(1, 3));
counters.add(new Counter(1, 1));
counters.add(new Counter(2, 1));
counters.add(new Counter(3, 1));
counters.add(new Counter(4, 1));
counters.add(new Counter(4, 5));
counters.add(new Counter(3, 5));
counters.add(new Counter(2, 5));
counters.add(new Counter(2, 3));
counters.add(new Burner(3, 3));
counters.add(new CuttingBoard(4, 3));
counters.add(new FoodCrate(EyeOfNewt, 5, 3));
counters.add(new FoodCrate(BlueJayEgg, 6, 3));

gameObjects.add(new Cauldron(counters.find(3, 3)));
gameObjects.add(new Cauldron(counters.find(2, 3)));
gameObjects.add(new Bottle(counters.find(4, 1)));

draw = function () {
	
	[mouse.x, mouse.y] = [mouseX, mouseY];

	deltaTime = min(50, 1000/this.__frameRate);

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