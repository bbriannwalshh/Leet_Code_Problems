// white elephant
// players: a list of strings (names) that is in order of turn priority. 
// gifts: a list of strings (names/descriptions) that is in order of when they were taken from the pile or stolen from another player
// output: mapping of which player ended up with which gift at the end of the night

// if your present is stolen, you can choose another gift

// can have duplicate gifts
// let john = "book";
// let paul = "videogame";
// let george = "ball";
// let ringo = "tv";


function whiteElephant(players, gifts) {
  // examplePlayers: ["john", "paul", "george", "ringo"];
  // exampleGifts: ["ball", "tv", "ball", "videogame", "tv", "videogame", "book"];

  let playerPresents = {};
  let playerIdx = 0;
  let stolenIdx = null;

  // key = gift // value = index of player;
  let uncoveredGifts = {};

  while (gifts.length) {
    let player;
    let gift;
    let currentIdx;

    if (Number.isInteger(stolenIdx)) {
      currentIdx = stolenIdx;
    } else {
      currentIdx = playerIdx;
    }

    player = players[currentIdx];
    gift = gifts.shift();

    if (Number.isInteger(uncoveredGifts[gift])) {
      stolenIdx = uncoveredGifts[gift];
    } else {
      stolenIdx = null;
      playerIdx += 1;
    }

    uncoveredGifts[gift] = currentIdx;
    playerPresents[player] = gift;
  }

  return playerPresents;
}

let players = ["john", "paul", "george", "ringo"];
let gifts = ["ball", "tv", "ball", "videogame", "tv", "videogame", "book"];

console.log(whiteElephant(players, gifts));


//  convert to for loop
//  convert to stack implementation
