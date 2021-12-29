//attempted 2d array to start with, but wasn't working so switched to a single array and going to parse the string to an integer
// each card is in one cardSuit. 4 cardSuits * 13 possible cardValues = 52 cards = a deck

let cardDeck = [];
let playerTotal = 0;

function newDeck(){
  let cardSuit = ["Heart", "Diamond", "Club", "Spade"];
  let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "Q"];

  for (var i = 0; i < cardSuit.length; i++) {
    for (var j = 0; j < cardValue.length; j++) {
      cardDeck.push([cardSuit[i],cardValue[j]])
    }
  }
}

function generateCard(){
  // Random item line of code taken from: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
  let randomCard = Math.floor(Math.random()*cardDeck.length)
  let card = cardDeck[randomCard];
  cardDeck.splice(randomCard,1)
  return card;
}

function startingCards(){
  let cardOne, cardTwo;
  cardOne = generateCard()
  cardTwo = generateCard()
  console.log(cardOne)
  console.log(cardTwo)  
}

function startGame(){
  console.log("===== LOADED =====")
  newDeck()
  startingCards()

  
}



// console.log(cardDeck);
