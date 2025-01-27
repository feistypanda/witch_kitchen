
let keys = {};
let click = false;
let deltaTime = 1000/60;
let mouse = {
	x: 0,
	y: 0,
};
const gridSize = 60;

function cloneObj (obj) {
	return JSON.parse(JSON.stringify(obj));
}

// This animation easing function was generated using
// the Smoothinator by NonPlayerCharacter. To use the Smoothinator
// yourself, go to https://www.khanacademy.org/computer-programming/the-smoothinator-an-easy-tool-for-smooth-animations/5377288510554112
function easeFunction(x) {
    let t = (x - 0) / 1;
    return (
        x <= 0 ? 0 :
        x >= 1 ? 1 :
        Math.pow(t, 2) * 1 + 0
    );
}

let potions = (() => {
    return {
        freezing () {return {
            ingredients: [EyeOfNewt, BlueJayEgg, BlueJayEgg],
            name: "freezing",
            color: processing.color(95, 225, 230),
        }},
        fire ()     {return {
            ingredients: [EyeOfNewt, EyeOfNewt, EyeOfNewt],
            name: "fire",
            color: processing.color(242, 155, 24),
        }},
        idk1 ()     {return {
            ingredients: [EyeOfNewt, EyeOfNewt, BlueJayEgg],
            name: "fire",
            color: processing.color(169, 209, 58),
        }},
        idk2 ()     {return {
            ingredients: [BlueJayEgg, BlueJayEgg, BlueJayEgg],
            name: "fire",
            color: processing.color(62, 11, 92),
        }},
    }
})();
