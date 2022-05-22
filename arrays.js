// work hard to get arrays
 
var fruit1 = 'apples';
var fruit2 = 'oranges';

fruit2 = fruit1;

console.log(`${fruit2} and ${fruit1}`);

// next version

var fruit1 = 'apples';
var fruit2 = 'oranges';

var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;

console.log(`${fruit2} and ${fruit1}`);

// while loops

var start = 0;
var end = 12;

while (start < end) {
	console.log(`start: ${start}, end: ${end}`);
	start += 2;
	end -= 2;
}





