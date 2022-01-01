class Deck {
  /**
   * Represent a deck
   *
   * @constructor
   * @param {Array} cardDeck - The cards in a deck
   * @param {Array} cardSuit - The available card suits
   * @param {Array} cardValue - The available card values
   */
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

  /**
   * Creates a new deck of cards
   *
   * @returns A shuffled deck of cards
   */
  newDeck() {
    // For each suit in the cardSuit array
    for (var i = 0; i < this.cardSuit.length; i++) {
      // Go through each value and assign that value to the current suit that is being looped, and repeat until no more values then move to next suit until no more suits
      for (var j = 0; j < this.cardValue.length; j++) {
        // Add the value and it's suit to the cardDeck Array
        this.cardDeck.push([this.cardSuit[i], this.cardValue[j]]);
      }
    }

    // Call upon the shuffleDeck() method and pass into it the unshuffled deck of cards. Return a shuffled deck (i.e. cards now in random order.)
    return this.shuffle(this.cardDeck);

    /*
    Example for newDeck():
    For "Heart" suit...
      Assign a "A"
      Assign a "2"
      Assign a "3"
      ...etc
    For "Diamond" suit...
      Assign a "A"
      Assign a "2"
      Assign a "3"
      ...etc
    ..etc

    Once assigned, shuffle them into a random order and then return the shuffled deck when the method is called upon.
  */
  }

  /**
   * Randomises the order of a deck of cards.
   *
   * @param {Array} cardDeck - An unshuffled deck of cards in the form [[cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue] etc]
   * @returns A deck of cards that are now shuffled - i.e. in random order
   */
  shuffle(cardDeck) {
    // This line of code has been taken from here: https://javascript.info/task/shuffle
    return cardDeck.sort(() => Math.random() - 0.5);
  }

  /**
   * Pulls a card from the top of a deck of cards
   *
   * @param {Array} cardDeck - A deck of cards in the form [[cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue] etc]
   * @returns A card that has been pulled from the top of the deck
   */
  pullCard(cardDeck) {
    // If the deck has run out of cards, create a new deck of cards and assign that new deck to the cardDeck variable
    if (this.getCardDeckLength() <= 1) {
      cardDeck = this.newDeck();
    }

    // This line of code has been taken from here: https://www.w3schools.com/jsref/jsref_shift.asp
    // Pulls a card from the deck of the deck and assigns it to a variable then returns the card variable
    let card = cardDeck.shift();
    return card;
  }

  /**
   * Retrieves what cards are in the deck of cards
   *
   * @returns The cards in the deck of cards in the form [[cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue] etc]
   */
  getCardDeck() {
    return this.cardDeck;
  }

  /**
   * Retrieves how many cards are in the deck of cards
   *
   * @returns The number of cards in the deck as an integer in the form "3", "43", "40" etc
   */
  getCardDeckLength() {
    return this.cardDeck.length;
  }

  /**
   * Checks the cards value as a string and return its equivalent integer.
   * 
   * @param {string} cardValue - The cards value as a string in the form "A", "5", "10" for example.
   * @param {integer} score - The score of the dealer/player depending on input in the form "10", "13", "20" etc
   * @returns The cards value as an integer
   */
  getCardValue(cardValue, score) {
    switch (cardValue) {
      case "A":
        // If one starting card is a Jack, Queen, King, or 10 and the other starting card is an Ace then Blackjack (equals 21)
        // Otherwise if the first starting cards equal to 10 or below 10 (e.g. 3 + 4 = 7) then the ace still counts for 11 when hit
        // Else if the player total is over 10, the Ace always counts for 1 when hit
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
