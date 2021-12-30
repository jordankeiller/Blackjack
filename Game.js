import Deck from "./Deck.js";
import Player from "./Player.js";

class Game {
  constructor() {
    this.Deck = new Deck();
    this.Player = new Player();
  }

  initialise() {
    let newDeck = this.Deck.newDeck();
    for (let i = 0; i < 2; i++) {
      this.drawCard(newDeck);
    }
  }

  drawCard(deck) {
    let card = this.Deck.pullCard(deck);
    this.Player.addPlayerCards(card);
    this.Player.addPlayerScore(this.Player.getPlayerCardValue(card[1]));
    this.updateGame();
  }

  updateGame() {
    document.getElementById("cardDeckTotal").innerHTML =
      this.Deck.getCardDeckLength();
    document.getElementById("playerScore").innerHTML =
      this.Player.getPlayerScore();
    document.getElementById("playerCards").innerHTML =
      this.Player.getPlayerCards().join(" ");
    console.log("game updated!");
  }
}

let newGame = new Game();
newGame.initialise();

export default Game;
