//attempted 2d array to start with, but wasn't working so switched to a single array and going to parse the string to an integer
// each card is in one cardSuit. 4 cardSuits * 13 possible cardValues = 52 cards = a deck

let cardDeck = [];
let playerTotal = 0;

function newDeck() {
  let cardSuit = ["Heart", "Diamond", "Club", "Spade"];
  let cardValue = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
  ];

  for (var i = 0; i < cardSuit.length; i++) {
    for (var j = 0; j < cardValue.length; j++) {
      cardDeck.push([cardSuit[i], cardValue[j]]);
    }
  }
}

function generateCard() {
  // Random item line of code taken from: https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
  let randomCard = Math.floor(Math.random() * cardDeck.length);
  let card = cardDeck[randomCard];
  cardDeck.splice(randomCard, 1);
  // return card as an array
  return card;
}

function updatePlayerTotal(value) {
  playerTotal = playerTotal + value;
  document.getElementById("playerScore").innerHTML = playerTotal;
}

function startingCards() {
  let cardOne = generateCard(),
    cardTwo = generateCard();
  updatePlayerTotal(getCardValue(cardOne[1]));
  updatePlayerTotal(getCardValue(cardTwo[1]));
}

function getCardValue(cardValue) {
  switch (cardValue) {
    case "A":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "10":
      return 10;
    // Default 10 for King, Jack and Queen
    default:
      return 10;
  }
}
function startGame() {
  console.log("===== LOADED =====");
  newDeck();
  startingCards();
}

// console.log(cardDeck);
