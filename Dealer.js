import Deck from "./Deck.js";

class Dealer {
  constructor() {
    this.dealerCards = [];
    this.dealerScore = 0;
    this.Deck = new Deck();
  }

  addDealerCard(card) {
    this.dealerCards.push(card);
  }

  getDealerCard() {
    return this.dealerCards;
  }

  addDealerScore(value) {
    this.dealerScore = this.dealerScore + value;
  }

  getDealerScore() {
    return this.dealerScore;
  }

  getDealerCardValue(cardValue) {
    return this.Deck.getCardValue(cardValue, this.getDealerScore());
  }
}

export default Dealer;
