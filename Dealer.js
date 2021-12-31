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

  getDealerCardValue(cardValue) {
    switch (cardValue) {
      case "A":
        // if one starting card is a jack, queen, king, or 10 and the other starting card is an ace then blackjack (equals 21)
        // otherwise if the first starting cards equal to 10 or below 10 (e.g. 3 + 4 = 7) then the ace still counts for 11 when hit
        // else if the player total is over 10, the ace always counts for 1 when hit
        if (this.getDealerScore() <= 10) {
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
}

export default Dealer;
