// nested arrays algo
// first write isPresent2d(arr2d, value) to return true or false to whether
// a value is present.

var arr2d = [
	[2, 5, 8],
	[3, 6, 1],
	[5, 7, 7]
];


console.log(arr2d.length);

var present = false;

function isPresent2d(arr2d, value) {
	for (var i = 0; i < arr2d.length; i++) {
		for (a = 0; a < arr2d[i].length; a++) {
			if (arr2d[i][a] == value) {
				return present = true;
		}	
	}
}

if (present == true) {
	console.log(`yes, the ${value} is present in the array`);
} else {
	console.log(`no, the ${value} is not present in the array`);
}

isPresent2d(arr2d, 6);


