
// this object "foods" will manage all of the food items that are existant in the world
// IIFE creates a foods object then returns it to be the foods vatiable

let foods = (() => {

	// create and return an anonymous object containing methods and varibles of the foods
	return {
		foods: [], // array w/ all of the food items

		/**
		 * The toString method of the foods object
		 * @returns a list of all of the different foods in it
		*/
		toString () {
			let result = ""; // the initial string

			// loop through all of the food items
			for (const food of this.foods) {
				result += food + ",\n"; // add the current food item to the result and add a seperator
			}

			return result;
		},

		/**
		 * this function calls the run function of all of the foods in the foods array and removes the foods that have been served or deleted
		*/
		run () {
			for (var i = this.foods.length - 1; i >= 0; i--) {
				// only run the food if it is not to be removed
				if (!this.foods[i].remove) {

					this.foods[i].run(); // run the food

					// if it is still not to be removed, dont purge it
					if (!this.foods[i].deleted) {
						continue;
					}
				}

				this.foods.splice(i, 1); // if we got here, remove the food from the array
			}
		}
	};
})();