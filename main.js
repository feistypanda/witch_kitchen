
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
		background (...args) {
			return background(...args);
		},

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

		createFont (...args) {
			return createFont(...args);
		},

		constants: PConstants,
	};
})();

var SIGNIKA = createFont("Signika");

for (let i in Object.keys(scenes.scenes)) {
	scenes.scenes[Object.keys(scenes.scenes)[i]] = scenes.scenes[Object.keys(scenes.scenes)[i]]();
}

// load all of the potions
for (let key of Object.keys(potions)) {
	potions[key] = potions[key]();
}

// the level

counters.add(new Burner(4, 4));
counters.add(new Burner(4, 5));
counters.add(new Burner(5, 4));
counters.add(new Burner(5, 5));

counters.add(new FoodCrate(EyeOfNewt, 4, 0));
counters.add(new FoodCrate(BlueJayEgg, 5, 0));

counters.add(new BottleReturn(9, 4));
counters.add(new Seller(9, 5, PI, counters.find(9, 4)));
counters.add(new CuttingBoard(0, 4));
counters.add(new CuttingBoard(0, 5));
counters.add(new CuttingBoard(0, 3));
counters.add(new TrashCan(3, 0));
for (let i = 0; i < 8; i ++) {
	if (i !== 4 && i !== 5 && i !== 3) counters.add(new Counter(0, i));
}
for (let i = 1; i < 10; i ++) {
	counters.add(new Counter(i, 7));
}
counters.add(new Counter(2, 0));
counters.add(new Counter(1, 0));
counters.add(new Counter(9, 6));
counters.add(new Counter(9, 3));
counters.add(new Counter(9, 2));
counters.add(new Counter(9, 1));
counters.add(new Counter(9, 0));
counters.add(new Counter(8, 0));
counters.add(new Counter(7, 0));
counters.add(new Counter(6, 0));

gameObjects.add(new Cauldron(counters.find(4, 5)));
gameObjects.add(new Cauldron(counters.find(5, 5)));
gameObjects.add(new Cauldron(counters.find(5, 4)));
gameObjects.add(new Cauldron(counters.find(4, 4)));
gameObjects.add(new Bottle(counters.find(4, 7)));
gameObjects.add(new Bottle(counters.find(5, 7)));


draw = function () {
	
	[mouse.x, mouse.y] = [mouseX, mouseY];

	deltaTime = lerp (deltaTime, min(50, 1000/this.__frameRate), 0.7);

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