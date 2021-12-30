//attempted 2d array to start with, but wasn't working so switched to a single array and going to parse the string to an integer
// each card is in one cardSuit. 4 cardSuits * 13 possible cardValues = 52 cards = a deck

let playerCards = [];
let playerTotal = 0;





function validateEndGame(move) {
  if (move == "hit") {
    if (playerTotal > 21) {
      updateGameButtons();
      document.getElementById("result").innerHTML = "<b>BUST!</b> You lose!";
    }
  } else {
    updateGameButtons();
    document.getElementById("result").innerHTML =
      "<b>VALID!</b> You have stuck on " + playerTotal + "!";
  }
}

function updateGameButtons() {
  document.getElementById("hit-button").disabled = true;
  document.getElementById("stay-button").disabled = true;
  document.getElementById("restart-button").style.visibility = "visible";
}

function hit() {
  pullCard();
  validateEndGame("hit");
}
function startingCards() {
  let numberOfStartCards = 2;
  for (let i = 0; i < numberOfStartCards; i++) {
    pullCard();
  }
}

// pulls card from the top of the shuffled deck
function pullCard() {
  updatePlayerCards(card);
  updatePlayerTotal(getCardValue(card[1]));
  updateCardDeckTotal(cardDeck.length);
}

function stay() {
  validateEndGame("stay");
}

function updatePlayerCards(card) {
  playerCards.push(card);
  document.getElementById("playerCards").innerHTML = playerCards.join(" ");
}



function startGame() {
  newDeck();
  startingCards();
  document.getElementById("restart-button").style.visibility = "hidden";
}
