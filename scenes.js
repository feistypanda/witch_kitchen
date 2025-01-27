
// the scenes object, contains scene functions as methods that can be invoked with scenes.scenes[scene].run(), or bu calling scenes.runCurrentScene();

let scenes = (() => {

	// keep this neater by making the scene objects up here
	let play = function (){
		return {
			startTime: Date.now(),
			allowedTime: 1000 * 60 * 4,
			g: processing.createGraphics(600, 600, processing.constants.P2D),

			run () {
				processing.image(images.floor, 0, 0);
				counters.run();
				player.run();
				gameObjects.run();

				this.g.background(0, 0);
				this.g.fill(247, 164, 19);
				this.g.textFont(processing.createFont("signika"), 50);
				this.g.textAlign(processing.constants.LEFT, processing.constants.BOTTOM);
				this.g.text(`${player.money}$`, 20, 580);
				this.g.textAlign(processing.constants.RIGHT, processing.constants.BOTTOM);
				this.g.text(`${(() => {
					let sec = Math.floor((this.allowedTime - (Date.now() - this.startTime))/1000);
					if (sec < 0) {
						scenes.curScene = "finish";
					}
					let min = Math.floor(sec/60);
					sec %= 60;

					min = Math.max(0, min);
					sec = Math.max(0, sec);

					if (sec < 10) sec = "0" + sec;

					return `${min}:${sec}`;
				})()}`, 580, 580);

				processing.image(this.g, 0, 0);

			},
		}
	};

	let finish = function (){
		return {
			startTime: Date.now(),
			g: processing.createGraphics(600, 600, processing.constants.P2D),

			run () {
				processing.noStroke();
				processing.fill(20, (Date.now() - this.startTime)/50);
				processing.rect(0, 0, 600, 600);

				this.g.background(0, 0);
				this.g.fill(247, 164, 19);
				this.g.textFont(processing.createFont("signika"), 50);
				this.g.textAlign(processing.constants.CENTER);
				this.g.text(`You Earned $${player.money}!!!\n\n reload to play again!`, 300, 300);
				processing.image(this.g, 0, 0);

			},

		}
	};

	let menu = function (){
		return {
			g: processing.createGraphics(600, 600, processing.constants.P2D),

			run () {
				processing.background(255);
				this.g.background(0, 0);
				this.g.fill(247, 164, 19);
				this.g.textFont(processing.createFont("signika"), 50);
				this.g.textAlign(processing.constants.CENTER);
				this.g.text("~~ click to begin ~~", 300, 300);
				processing.image(this.g, 0, 0);
				if (click) scenes.curScene = "how";

			},

		}
	};

	let how = function (){
		return {
			g: processing.createGraphics(600, 600, processing.constants.P2D),

			run () {
				processing.background(255);
				this.g.background(0, 0);
				this.g.fill(247, 164, 19);
				this.g.textFont(processing.createFont("signika"), 30);
				this.g.textAlign(processing.constants.CENTER, processing.constants.CENTER);
				this.g.text("go close to a counter and click on it\nto pick stuff up and put it down\n\nchop ingredients by pressing e with the\ningredient of the cutting board\n\nput ingredients in cauldrons to cook\nthree ingredients in a bottle is a potion\n\n serve with the thingy with arrows to get money\n\n~~ click to play ~~", 300, 300);
				processing.image(this.g, 0, 0);
				if (click) scenes.curScene = "play";

			},

		}
	};

	return {
		curScene: "menu",
		scenes: {
			play,
			finish,
			menu,
			how,
		},
		/**
		 * A simple method that runs the scene that the curScene property points to
		 * @returns whatever the scene funciton that is being run returns
		*/
		runCurrentScene () {
			return this.scenes[this.curScene].run();
		}
	}
})();