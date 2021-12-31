class Dealer {
  constructor() {
    this.dealerCards = [];
    this.dealerScore = 0;
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
}

export default Dealer;
