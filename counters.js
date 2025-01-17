
// counters, like the kichen apliance
let counters = (() => {
	return {
		counters: [],

		/**
		 * @method
		 * a method to loop through all of the counters in this.counters and call the run method of that counter
		*/
		run () {
			for (let i in this.counters) {
				this.counters[i].run();
			}
		},

		/**
		 * @method
		 * adds a counter object to the array of counters
		 * @param {obj} counter -  the counter object to add
		*/
		add (counter) {
			this.counters.push(counter);
		},

		/**
		 * @method
		 * finds the counter at a coordinate
		 * @param {number} x - the x coord in the grid of the counter to find
		 * @param {number} y - the y coord in the grid of the counter to find
		 * @returns {obj} the counter object that is found. returns false if no match
		*/
		find (x, y) {
			return this.counters.find(k => k.position.x === x && k.position.y === y);
		},
	}
})();