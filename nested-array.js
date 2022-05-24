// nested arrays algo
// first write isPresent2d(arr2d, value) to return true or false to whether
// a value is present.

var arr2d = [
	[2, 5, 8],
	[3, 6, 1],
	[5, 7, 7]
];


var present = false;

function isPresent2d(arr2d, value) {
	for (var i = 0; i < arr2d.length; i++) {
		console.log(`i: ${i}`);
		for (a = 0; a < arr2d[i].length; a++) {
			console.log(arr2d[i].length);
			console.log(`a: ${a}`);
			if (arr2d[i][a] == value) {
				return present = true;
			}
		}	
	}
}
var num = 9;
var present = isPresent2d(arr2d,num);

if (present == true) {
	console.log(`yes, the value ${num} is present in the array`);
} else {
	console.log(`no, the value ${num} is not present in the array`);
}



