import Deck from "./Deck.js";

class Player {
  constructor() {
    this.playerCards = [];
    this.playerScore = 0;
    this.Deck = new Deck();
  }

  addPlayerCards(card) {
    this.playerCards.push(card);
  }

  addPlayerScore(value) {
    this.playerScore = this.playerScore + value;
  }

  getPlayerCards() {
    return this.playerCards;
  }

  getPlayerScore() {
    return this.playerScore;
  }

  getPlayerCardValue(cardValue) {
    return this.Deck.getCardValue(cardValue, this.getPlayerScore());
  }
}

export default Player;
