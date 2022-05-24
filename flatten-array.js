// flatten array challeng

function flatten(arr2d) {
	var flat = [];
	for (var i = 0; i < arr2d.length; i++) {
		for (var a = 0; a < arr2d[i].length; a++) {
			flat.push(arr2d[i][a]);
		}
	}		
	return flat;
}

var result = flatten ([
	[2, 5, 8],
	[3, 6, 1],
	[5, 7, 7]
]);

console.log(result);
// expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


