//attempted 2d array to start with, but wasn't working so switched to a single array and going to parse the string to an integer
// each card is in one cardSuit. 4 cardSuits * 13 possible cardValues = 52 cards = a deck

let cardDeck = [];
let playerCards = [];
let playerTotal = 0;

function newDeck() {
  let cardSuit = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
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
  shuffle(cardDeck);
}

// taken from: https://javascript.info/task/shuffle
// shuffles the entire deck
function shuffle(cardDeck) {
  return cardDeck.sort(() => Math.random() - 0.5);
}

// pulls card from the top of the deck
function pullCard() {
  return (card = cardDeck.shift());
}

function validateEndGame(move) {
  if (move == "hit") {
    if (playerTotal > 21) {
      document.getElementById("hit-button").disabled = true;
      document.getElementById("stay-button").disabled = true;
      document.getElementById("result").innerHTML = "BUST! You lose!";
      document.getElementById("restart-button").style.visibility = "visible";
    }
  } else {
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stay-button").disabled = true;
    document.getElementById("result").innerHTML =
      "Validated! You have stuck on " + playerTotal + "!";
    document.getElementById("restart-button").style.visibility = "visible";
  }
}

function hit() {
  console.log("hit");
  let card = pullCard();
  updatePlayerCards(card);
  console.log(card);
  updatePlayerTotal(getCardValue(card[1]));
  validateEndGame("hit");
  console.log(playerCards);
}

function stay() {
  validateEndGame("stay");
}

function updatePlayerCards(card) {
  playerCards.push(card);

  document.getElementById("playerCards").innerHTML = playerCards;
}

function updatePlayerTotal(value) {
  playerTotal = playerTotal + value;
  document.getElementById("playerScore").innerHTML = playerTotal;
}

function startingCards() {
  let numberOfStartCards = 2;

  for (let i = 0; i < numberOfStartCards; i++) {
    let card = pullCard();
    updatePlayerCards(card);
    updatePlayerTotal(getCardValue(card[1]));
    // console.log(card);
  }
}

function getCardValue(cardValue) {
  switch (cardValue) {
    case "A":
      // if one starting card is a jack, queen, king, or 10 and the other starting card is an ace then blackjack (equals 21)
      // otherwise if the first starting cards equal to 10 or below 10 (e.g. 3 + 4 = 7) then the ace still counts for 11 when hit
      // else if the player total is over 10, the ace always counts for 1 when hit
      if (playerTotal <= 10) {
        return 11;
      } else {
        return 1;
      }
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
  newDeck();
  console.log(cardDeck);
  startingCards();
  console.log(cardDeck);
  document.getElementById("restart-button").style.visibility = "hidden";
}
