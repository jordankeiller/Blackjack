import Deck from "./Deck.js";
import Player from "./Player.js";
import Dealer from "./Dealer.js";

// REMEMBER ADD REFERENCES

class Game {
  constructor() {
    this.Deck = new Deck();
    this.Player = new Player();
    this.Dealer = new Dealer();
    this.possibleSoftSeventeen = false;
  }

  initialise() {
    document.getElementById("restart-button").style.visibility = "hidden";
    let newDeck = this.Deck.newDeck();
    let dealerCard = this.drawCard(newDeck);
    this.Dealer.addDealerCard(dealerCard);
    let cardValue = this.Dealer.getDealerCardValue(dealerCard[1]);
    this.Dealer.addDealerScore(cardValue);
    if (cardValue == 11) {
      this.possibleSoftSeventeen = true;
    }

    for (let i = 0; i < 2; i++) {
      let card = this.drawCard(newDeck);
      this.hit(card);
    }
  }

  drawCard(deck) {
    let card = this.Deck.pullCard(deck);
    return card;
  }

  hit(card) {
    this.Player.addPlayerCards(card);
    this.Player.addPlayerScore(this.Player.getPlayerCardValue(card[1]));
    this.updateGame(0);
  }

  changeButtonState() {
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stay-button").disabled = true;
    document.getElementById("restart-button").style.visibility = "visible";
  }

  dealerShot() {
    let dealerCard = this.drawCard(this.Deck.getCardDeck());
    this.Dealer.addDealerCard(dealerCard);
    let cardValue = this.Dealer.getDealerCardValue(dealerCard[1]);
    if (cardValue == 11) {
      this.possibleSoftSeventeen = true;
    }
    this.Dealer.addDealerScore(cardValue);

    document.getElementById("dealerScore").innerHTML =
      this.Dealer.getDealerScore();
    document.getElementById("dealerCards").innerHTML =
      this.Dealer.getDealerCard();
  }

  stay() {
    while (this.Dealer.getDealerScore() < 18) {
      // if the dealers score is at 17
      if (this.Dealer.getDealerScore() == 17) {
        // if soft seventeen
        if (this.possibleSoftSeventeen) {
          console.log("i'm adding an extra card - soft 17 :)");
          this.dealerShot();
        }
        //else hard 17
        else {
          break;
        }
      }
      //else the players score is less than 17
      else {
        this.dealerShot();
      }
    }
    this.updateGame(1);
  }

  playerWin() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-danger");
    document.getElementById("playerHand").classList.add("bg-success");
    document.getElementById("result").innerHTML =
      "<b>YOU WIN!</b> Congratulations!";
    document.getElementById("dealerResult").innerHTML =
      "<b>DEALER LOSES!</b> Maybe next time...";
  }

  dealerWin() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-success");
    document.getElementById("playerHand").classList.add("bg-danger");
    document.getElementById("result").innerHTML =
      "<b>YOU LOSE!</b> Maybe next time...";
    document.getElementById("dealerResult").innerHTML =
      "<b>DEALER WINS!</b> Congratulations!";
  }

  tie() {
    this.changeButtonState();
    document.getElementById("dealerHand").classList.add("bg-warning");
    document.getElementById("playerHand").classList.add("bg-warning");
    document.getElementById("result").innerHTML =
      "<b>TIE!</b> No winners this time...";
    document.getElementById("dealerResult").innerHTML =
      "<b>TIE!</b> No winners this time...";
  }

  updateGame(finished) {
    if (finished) {
      if (this.Dealer.getDealerScore() > 21) {
        this.playerWin();
        // dealer busts, player wins
      } else {
        if (this.Player.getPlayerScore() > this.Dealer.getDealerScore()) {
          this.playerWin();
          // player has more points than the dealer, player wins
        } else if (
          this.Player.getPlayerScore() === this.Dealer.getDealerScore()
        ) {
          this.tie();
          // player and dealer have the exact same amount of points, so tie
        } else {
          this.dealerWin();
          // dealer has more points than the player, dealer wins
        }
      }
    }
    if (this.Player.getPlayerScore() > 21) {
      this.dealerWin();
      // player busts, dealer wins
    }

    document.getElementById("cardDeckTotal").innerHTML =
      this.Deck.getCardDeckLength();
    document.getElementById("dealerScore").innerHTML =
      this.Dealer.getDealerScore();
    document.getElementById("dealerCards").innerHTML =
      this.Dealer.getDealerCard();
    document.getElementById("playerScore").innerHTML =
      this.Player.getPlayerScore();
    document.getElementById("playerCards").innerHTML =
      this.Player.getPlayerCards().join(" ");
  }
}

export default Game;
