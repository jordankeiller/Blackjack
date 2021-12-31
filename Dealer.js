/*
  Project: Blackjack
  Description: Web-based implementation of the classic game, Blackjack.
  Author: Jordan Keiller
  Email: keillerj538@gmail.com 
*/

import Deck from "./Deck.js";

class Dealer {
  /**
   * Represents a dealer
   * @constructor
   * @param {Array} dealerCards - The cards that a dealer has
   * @param {Integer} dealerScore - The score of the dealer
   * @param {Object} Deck - The deck that the dealer is using
   */
  constructor() {
    this.dealerCards = [];
    this.dealerScore = 0;
    this.Deck = new Deck();
  }

  /**
   *
   * Adds the card to the dealerCards array
   *
   * @param {Array} card  - The card in the form [cardSuit, cardValue]
   */
  addDealerCard(card) {
    this.dealerCards.push(card);
  }

  /**
   * Adds the value to the total dealer score
   *
   * @param {Integer} value - The value to be added on (e.g. "6", "10")
   */
  addDealerScore(value) {
    this.dealerScore = this.dealerScore + value;
  }

  /**
   * Retrieve the cards that the dealer has
   *
   * @returns The cards the dealer has in the form [[cardSuit, cardValue], [cardSuit, cardValue]]
   */
  getDealerCards() {
    return this.dealerCards;
  }

  /**
   * Retrieve the score that the dealer has
   *
   * @returns The dealers total score as an integer e.g. (6 or 10)
   */
  getDealerScore() {
    return this.dealerScore;
  }

  /**
   * Retrieve the players cards values as an integer instead of a string
   *
   * @param {string} cardValue  - The cards value as a string in the form "A", "5", "10" for example.
   * @returns The cards value as an integer.
   */
  getDealerCardValue(cardValue) {
    return this.Deck.getCardValue(cardValue, this.getDealerScore());
  }
}

export default Dealer;
