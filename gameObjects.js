
// this object "gameObjects" will manage all of the food items that are existant in the world
// IIFE creates a gameObjects object then returns it to be the gameObjects vatiable

let gameObjects = (() => {

	// create and return an anonymous object containing methods and varibles of the gameObjects
	return {
		gameObjects: [], // array w/ all of the food items

		/**
		 * The toString method of the gameObjects object
		 * @returns a list of all of the different gameObjects in it
		*/
		toString () {
			let result = ""; // the initial string

			// loop through all of the food items
			for (const food of this.gameObjects) {
				result += food + ",\n"; // add the current food item to the result and add a seperator
			}

			return result;
		},

		/**
		 * this function calls the run function of all of the gameObjects in the gameObjects array and removes the gameObjects that have been served or deleted
		*/
		run () {
			
			for (var i = this.gameObjects.length - 1; i >= 0; i--) {
				// only run the food if it is not to be removed
				if (!this.gameObjects[i].remove) {

					this.gameObjects[i].run(); // run the food

					// if it is still not to be removed, dont purge it
					if (!this.gameObjects[i].deleted) {
						continue;
					}
				}

				this.gameObjects.splice(i, 1); // if we got here, remove the food from the array
			}
		},

		/**
		 * @method
		 * a method to push a food to the array of gameObjects
		 * @param {obj} food - the food to be pushed
		*/
		add (food) {

			this.gameObjects.push(food);
		},

	};
})();