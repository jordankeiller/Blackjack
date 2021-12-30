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
    let card = cardDeck.shift();
    return card;
  }

  getCardDeck() {
    return this.cardDeck;
  }
}

export default Deck;
