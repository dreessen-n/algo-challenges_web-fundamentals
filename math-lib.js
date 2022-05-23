// Math library practice

// math.floor() - rounds DOWN to nearest int

var floor = Math.floor(1.8);

// math.ceil() - rounds UP to nearest int

var ceiling = Math.ceil(Math.PI);

// math.random() - generates a random num between 0 (inclusive)
// and 1 (exclusive)

var random = Math.random();

console.log(floor);
console.log(ceiling);
console.log(random);

// Dice Roller

function d6() {
	var roll = Math.random();
	// we use Math.floor to round down
	// multiply by 6 for opt of dice but it from 0-5
	// so we add 1 to the num to get range of 1-6 poss roll
	roll = Math.floor(roll * 6) + 1;
	return roll;
}

var playerRoll = d6();
console.log(`The player rolled: ${playerRoll}`);
