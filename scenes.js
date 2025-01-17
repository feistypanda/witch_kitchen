
// the scenes object, contains scene functions as methods that can be invoked with scenes.scenes[scene].run(), or bu calling scenes.runCurrentScene();

let scenes = (() => {

	// keep this neater by making the scene objects up here
	let play = {
		run () {
			processing.image(images.floor, 0, 0);
			counters.run();
			player.run();
			gameObjects.run();
		},
	};

	return {
		curScene: "play",
		scenes: {
			play,
		},
		/**
		 * A simple function that runs the scene that the curScene property points to
		 * @returns whatever the scene funciton that is being run returns
		*/
		runCurrentScene () {
			return this.scenes[this.curScene].run();
		}
	}
})();