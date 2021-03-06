// Array of Objects

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

console.log(`\nprint pokemon name if id over 99:\n`);

for (var i = 0; i < pokemon.length; i++) {
	if (pokemon[i].id > 99) {
		console.log(pokemon[i].name);
	}
}

// console.log pokemon objects whose ids are evenly divisibly by 3

console.log(`\nprint pokemon name if id is divisible by 3:\n`);

for (var i = 0; i < pokemon.length; i++) {
	if ((pokemon[i].id % 3) == 0) {
		console.log(pokemon[i].name);
	}
}

// console.log the pokemon objects that have more than one type

console.log(`\nprint pokemon name if it has multiple types:\n`);

for (var i = 0; i < pokemon.length; i++) {
	if ((pokemon[i].types).length > 1) {
		console.log(pokemon[i].name);
	}
}

// console.log the names of pokemon whose only type is 'poison'

console.log(`\nprint names of pokemon whose only type is "poison"\n`);

for (var i = 0; i < pokemon.length; i++) {
	if (pokemon[i].types == 'poison') {
		console.log(pokemon[i].name);
	}
}

// console.log the first type of all the pokemon whose second type is 'flying'

console.log(`\nprint the first type of all the pokemon whose second type is "flying"\n`);

for (var i = 0; i < pokemon.length; i++) {
	if (pokemon[i].types[1] == 'flying') {
		console.log(pokemon[i].types[0]);
	}
}

// BONUS: console.log the reverse of the names of the pokemon whose only type is 'poison'

console.log(`\nBONUS: print the reverse of the names of the pokemon whose only type is 'poison'\n`);

var temp = [];
var revNames = [];
for (var i = 0; i < pokemon.length; i++) {
	if (pokemon[i].types == 'poison') {
		temp.push(pokemon[i].name);
	}
}

for (var x = temp.length; x > 0; x--) {
	revNames.push(temp[x-1]);
}

console.log(`revNames: ${revNames}\n`);
