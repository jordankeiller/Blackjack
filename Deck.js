class Deck {
  constructor() {
    this.cardDeck = [];
    this.cardSuit = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
    this.cardValue = [
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
  }

  newDeck() {
    for (var i = 0; i < this.cardSuit.length; i++) {
      // add the value to the relevant suit, then repeat for next suit once values are complete
      for (var j = 0; j < this.cardValue.length; j++) {
        this.cardDeck.push([this.cardSuit[i], this.cardValue[j]]);
      }
    }
    return this.shuffle(this.cardDeck);
  }

  shuffle(cardDeck) {
    return cardDeck.sort(() => Math.random() - 0.5);
  }

  pullCard(cardDeck) {
    if (this.getCardDeckLength() <= 1) {
      cardDeck = this.newDeck();
    }
    let card = cardDeck.shift();
    return card;
  }

  getCardDeck() {
    return this.cardDeck;
  }

  getCardDeckLength() {
    return this.cardDeck.length;
  }

  getCardValue(cardValue, score) {
    switch (cardValue) {
      case "A":
        // if one starting card is a jack, queen, king, or 10 and the other starting card is an ace then blackjack (equals 21)
        // otherwise if the first starting cards equal to 10 or below 10 (e.g. 3 + 4 = 7) then the ace still counts for 11 when hit
        // else if the player total is over 10, the ace always counts for 1 when hit
        if (score <= 10) {
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

export default Deck;
