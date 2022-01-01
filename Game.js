/*
  Project: Blackjack
  Description: Web-based implementation of the classic game, Blackjack.
  Author: Jordan Keiller
  Email: keillerj538@gmail.com 
*/

import Deck from "./Deck.js";
import Player from "./Player.js";
import Dealer from "./Dealer.js";

class Game {
  /**
   * Represents a game
   * @constructor
   * @param {Object} Deck - The deck that is being used
   * @param {Object} Player - The player of the game
   * @param {Object} Dealer - The dealer of the game
   * @param {Boolean} possibleSoftSeventeen - The possibility of the dealer having a soft 17
   */
  constructor() {
    this.Deck = new Deck();
    this.Player = new Player();
    this.Dealer = new Dealer();
    this.possibleSoftSeventeen = false;
  }

  /**
   * Initialises a new game
   */
  initialise() {
    // The "Play Game" button is initially hidden from the player since the game has not yet started
    document.getElementById("restartButton").style.visibility = "hidden";

    // Get a new deck of cards and then assign it to a variable
    let newDeck = this.Deck.newDeck();

    // Pull a card for the dealer from the newly shuffled deck of cards and add it to the dealers hand in the Dealer object
    let dealerCard = this.drawCard(newDeck);
    this.Dealer.addDealerCard(dealerCard);

    // Add the value of the card the dealer pulled to their score
    let cardValue = this.Dealer.getDealerCardValue(dealerCard[1]);
    this.Dealer.addDealerScore(cardValue);

    // If the value of the card pulled is 11, the dealer has pulled an Ace so there is potential for a Soft 17, depending on the next card they pull.
    // Change the boolean parameter to reflect this.
    this.checkSoftSeventeen(cardValue);

    // Pull 2 cards for the players starting hand.
    for (let i = 0; i < 2; i++) {
      let card = this.drawCard(newDeck);
      this.hit(card);
    }
  }

  /**
   * Pulls a card from the top of the deck.
   *
   * @param {Array} deck - The deck the card is being pulled from in the form [[cardSuit, cardValue], [cardSuit, cardValue], [cardSuit, cardValue] etc]
   * @returns The card that has been pulled in the form [cardSuit, cardValue]
   */
  drawCard(deck) {
    // Using the Deck object, pull a card and assign to a variable
    let card = this.Deck.pullCard(deck);
    return card;
  }

  /**
   * Player has indiciated a hit, update their states and the game state to reflect the new changes
   *
   * @param {Array} card - The card being used to update the Player object and parameters in the form [cardSuit, cardValue]
   */
  hit(card) {
    // Use the Player object to access the method and update the playerCards parameter
    this.Player.addPlayerCards(card);

    // Use the Player object to access the method and update the playerScore parameter.
    this.Player.addPlayerScore(this.Player.getPlayerCardValue(card[1]));

    // Update the game state to reflect the changes. Pass the "0" to indicate the player has hit, so the game should continue as normal unless other conditions are met (e.g. player busts)
    this.updateGame(0);
  }

  /**
   * Change the in-game buttons functionality and visibility
   */
  changeButtonState() {
    document.getElementById("hitButton").disabled = true;
    document.getElementById("stayButton").disabled = true;
    document.getElementById("restartButton").style.visibility = "visible";
  }

  /**
   * Check whether there is potential for the dealer to have a soft seventeen
   *
   * @param {integer} cardValue - The value to be checked if there is potential for a soft seventeen
   */
  checkSoftSeventeen(cardValue) {
    // If the value is 11, the dealer has pulled an Ace so there is potential for a Soft 17, depending on the next card they pull.
    // Change the boolean parameter to reflect this.
    if (cardValue == 11) {
      this.possibleSoftSeventeen = true;
    }
  }

  /**
   * Pull cards for the dealer and update their respective values in the Dealer object.
   */
  dealerShot() {
    // Pull dealers card from the top of the deck and add it to their hand
    let dealerCard = this.drawCard(this.Deck.getCardDeck());
    this.Dealer.addDealerCard(dealerCard);

    // If the value is 11, the dealer has pulled an Ace so there is potential for a Soft 17, depending on the next card they pull.
    // Check the function to reflect this.
    let cardValue = this.Dealer.getDealerCardValue(dealerCard[1]);
    this.checkSoftSeventeen(cardValue);

    // Update the dealers state respectively
    this.Dealer.addDealerScore(cardValue);
    this.updateDealer();
  }

  /**
   * Player has indiciated to stay, update their states and the game state to reflect the new changes
   */
  stay() {
    // Repeat this code until the dealers score is <= 17 (i.e. dealer is continously pulling cards)
    while (this.Dealer.getDealerScore() < 18) {
      // If the dealers score reaches 17
      if (this.Dealer.getDealerScore() == 17) {
        // Then check if it is a soft seventeen, and if it is, hit for another card to be added to the dealers hand
        if (this.possibleSoftSeventeen) {
          console.log("i'm adding an extra card - soft 17 :)");
          this.dealerShot();
        }

        // Otherwise it is a hard 17. Break out of the loop and the dealer must stand - i.e. no more cards can be added to the dealer hand
        else {
          break;
        }
      }

      // The dealers score is below 17, so keep pulling cards until they meet the earlier set conditions
      else {
        this.dealerShot();
      }
    }

    // Update the game state to reflect the changes. Pass the "1" to indicate the player has "stuck", so the game should now end and calculate winner/loser/tie
    this.updateGame(1);
  }

  /**
   * Method to update the player win state and dealer lose state
   */
  playerWin() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-danger");
    document.getElementById("playerHand").classList.add("bg-success");
    document.getElementById("result").innerHTML =
      "<b>YOU WIN!</b> Congratulations!";
    document.getElementById("dealerResult").innerHTML =
      "<b>DEALER LOSES!</b> Maybe next time...";
  }

  /**
   * Method to update the dealer win state and player lose state
   */
  dealerWin() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-success");
    document.getElementById("playerHand").classList.add("bg-danger");
    document.getElementById("result").innerHTML =
      "<b>YOU LOSE!</b> Maybe next time...";
    document.getElementById("dealerResult").innerHTML =
      "<b>DEALER WINS!</b> Congratulations!";
  }

  /**
   * Method to update the dealer and player tie state
   */
  tie() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-warning");
    document.getElementById("playerHand").classList.add("bg-warning");
    document.getElementById("result").innerHTML =
      "<b>TIE!</b> No winners this time...";
    document.getElementById("dealerResult").innerHTML =
      "<b>TIE!</b> No winners this time...";
  }

  /**
   * Method to update the dealers score and the cards in their hand
   */
  updateDealer() {
    document.getElementById("dealerScore").innerHTML =
      this.Dealer.getDealerScore();
    document.getElementById("dealerCards").innerHTML =
      this.Dealer.getDealerCards();
  }

  /**
   * Method to update the players score and the cards in their hand
   */
  updatePlayer() {
    document.getElementById("playerScore").innerHTML =
      this.Player.getPlayerScore();

    // This line of code has been taken from here: https://www.w3schools.com/jsref/jsref_join.asp
    // join() is used to remove the comma after the card value, e.g. Heart, 3, Diamond, 3 ---> becomes ---> Heart, 3 Diamond, 3
    document.getElementById("playerCards").innerHTML =
      this.Player.getPlayerCards().join(" ");
  }

  /**
   * Main method to update the majority of the game states
   *
   * @param {integer} finished - Indiciates whether the game should update to the finish state or not.
   */
  updateGame(finished) {
    // If the game finish state has been initiated
    if (finished) {
      // If the Dealer got a score of >21, the dealer goes bust and the player wins
      if (this.Dealer.getDealerScore() > 21) {
        this.playerWin();
      }

      // If the dealer got a score of less than 21, check against the other win/lose conditions
      else {
        // If the player scored more points than the dealer without either going bust, the player wins
        if (this.Player.getPlayerScore() > this.Dealer.getDealerScore()) {
          this.playerWin();
        }

        // If the player and the dealer got the exact same amount of points, the game is a tie
        else if (
          this.Player.getPlayerScore() === this.Dealer.getDealerScore()
        ) {
          this.tie();
        }

        // If the dealer scored more points than the player without either going bust, the dealer wins
        else {
          this.dealerWin();
        }
      }
    }

    // If the player got a score of more than 21, the player goes bust and the dealer wins
    if (this.Player.getPlayerScore() > 21) {
      this.dealerWin();
      // player busts, dealer wins
    }

    // Update the number of cards that are remaining in the deck
    document.getElementById("cardDeckTotal").innerHTML =
      this.Deck.getCardDeckLength();

    // Update the dealer and player states
    this.updateDealer();
    this.updatePlayer();
  }
}

export default Game;
