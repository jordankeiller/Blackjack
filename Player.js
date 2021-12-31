/*
  Project: Blackjack
  Description: Web-based implementation of the classic game, Blackjack.
  Author: Jordan Keiller
  Email: keillerj538@gmail.com 
*/

import Deck from "./Deck.js";
class Player {
  /**
   * Represents a player
   *
   * @constructor
   * @param {Array} playerCards - The cards that a player has
   * @param {Integer} playerScore - The score of the player
   * @param {Object} Deck - The deck that the player is using
   */
  constructor() {
    this.playerCards = [];
    this.playerScore = 0;
    this.Deck = new Deck();
  }

  /**
   * Adds the card to the playerCards array
   *
   * @param {Array} card - The card in the form [cardSuit, cardValue]
   */
  addPlayerCards(card) {
    this.playerCards.push(card);
  }

  /**
   * Adds the value to the total player score
   *
   * @param {Integer} value - The value to be added on (e.g. "6", "10")
   */
  addPlayerScore(value) {
    this.playerScore = this.playerScore + value;
  }

  /**
   * Retrieve the cards that the player has
   *
   * @returns The cards the player has in the form [[cardSuit, cardValue], [cardSuit, cardValue]]
   */
  getPlayerCards() {
    return this.playerCards;
  }

  /**
   * Retrieve the score that the player has
   *
   * @returns The players total score as an integer e.g. (6 or 10)
   */
  getPlayerScore() {
    return this.playerScore;
  }

  /**
   * Retrieve the players cards values as an integer instead of a string
   *
   * @param {string} cardValue - The cards value as a string in the form "A", "5", "10" for example.
   * @returns The cards value as an integer
   */
  getPlayerCardValue(cardValue) {
    return this.Deck.getCardValue(cardValue, this.getPlayerScore());
  }
}
export default Player;
