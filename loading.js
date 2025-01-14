
// this is a object that when the .run method is called it caches images from the images object

let load = (() => {
	return {
		images: Object.keys(images), // get the names of the images that we need to load
		curLoad: 0, // index of the image that needs to be loaded

		/**
		 * method that loads one image by calling the function to draw the image and then storing back in the images object
		 * @returns {boolean} wether or not the loading is complete
		*/
		run () {

			if (this.curLoad >= this.images.length) return true;
			// console.log(this.curLoad);
			images[this.images[this.curLoad]] = images[this.images[this.curLoad]]();

			// move on to the next image the next time that this method is called
			this.curLoad ++;

			return this.curLoad < this.images.length;
		},
	}
})();
