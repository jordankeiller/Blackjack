//attempted 2d array to start with, but wasn't working so switched to a single array and going to parse the string to an integer
// each card is in one suit. 4 suits * 13 possible values = 52 cards = a deck

let suit = ["Heart", "Diamond", "Club", "Spade"];
let value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];
let deck = [];

for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < value.length; j++) {
    //   console.log(suit[i])
    //   console.log(value[j])
    // card[(suit[i], value[j])];
    deck.push([suit[i],value[j]])
  }
}

console.log(deck);
// console.log(suit);
