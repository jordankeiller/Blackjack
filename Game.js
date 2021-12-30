import Deck from "./Deck.js";
import Player from "./Player.js";

class Game {
  constructor() {
    this.Deck = new Deck();
    this.Player = new Player();
  }

  initialise() {
    document.getElementById("restart-button").style.visibility = "hidden";
    let newDeck = this.Deck.newDeck();
    for (let i = 0; i < 2; i++) {
      this.drawCard(newDeck);
    }
  }

  drawCard(deck) {
    let card = this.Deck.pullCard(deck);
    this.Player.addPlayerCards(card);
    this.Player.addPlayerScore(this.Player.getPlayerCardValue(card[1]));
    this.updateGame(0);
  }

  changeButtonState() {
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stay-button").disabled = true;
    document.getElementById("restart-button").style.visibility = "visible";
  }

  stay() {
      console.log("test")
    this.updateGame(1);
  }

  updateGame(finished) {
    if (finished) {
      this.changeButtonState();
      document.getElementById("result").innerHTML =
        "<b>VALID!</b> You have stuck on " + this.Player.getPlayerScore() + "!";
    } else if (this.Player.getPlayerScore() > 21) {
      this.changeButtonState();
      document.getElementById("result").innerHTML = "<b>BUST!</b> You lose!";
    } 
      document.getElementById("cardDeckTotal").innerHTML =
        this.Deck.getCardDeckLength();
      document.getElementById("playerScore").innerHTML =
        this.Player.getPlayerScore();
      document.getElementById("playerCards").innerHTML =
        this.Player.getPlayerCards().join(" ");
      console.log("game updated!");
    
  }
}




export default Game;
