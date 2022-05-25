// dojo sweeper game

var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];

var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game

function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

function howMany(i, j, element) {
  console.log({i, j});
  console.log({element});
  console.log(theDojo[i][j]);

  // REMEMBER THIS TO PRINT ON BLOCK: element.innerHTML = 4;
  // alert("TODO - determine how many ninjas are hiding in adjacent squares");

  var sum = 0;
  var clkSquareValue = theDojo[i][j];
  var start_i = i-1;
  var end_i = i+2;
  var start_j = j-1;
  var end_j = j+2;

  if (start_i < 0) {
    start_i = 0;
  } 

  if (start_j < 0) {
    start_j = 0;
  }

  if (end_i > theDojo.length - 1) {
    end_i = theDojo.length;
  }

  if (end_j > theDojo.length -1) {
    end_j = theDojo.length;
  }

  for (i = start_i; i < end_i; i++) {
	for (j = start_j; j < end_j; j++) {
	  sum = theDojo[i][j] + sum;
	}
  } 

  var total = sum - clkSquareValue;
  console.log(`total minus click square: ${total}`);
  element.innerHTML = total;

}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game

var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);

// shows the dojo for debugging purposes

console.table(theDojo);

// adds the rows of buttons into <div id="the-dojo"></div> 

dojoDiv.innerHTML = render(theDojo);    


