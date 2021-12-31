import Deck from "./Deck.js";
import Player from "./Player.js";
import Dealer from "./Dealer.js";

// REMEMBER ADD REFERENCES

class Game {
  constructor() {
    this.Deck = new Deck();
    this.Player = new Player();
    this.Dealer = new Dealer();
  }

  initialise() {
    document.getElementById("restart-button").style.visibility = "hidden";
    let newDeck = this.Deck.newDeck();
    let dealerCard = this.drawCard(newDeck);
    this.Dealer.addDealerCard(dealerCard);
    this.Dealer.addDealerScore(this.Player.getPlayerCardValue(dealerCard[1]));
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

  stay() {
    let dealerScore = this.Dealer.getDealerScore();
    console.log(dealerScore);

    while (dealerScore < 18) {
      if (dealerScore == 17) {
        break;
      } else {
        let dealerCard = this.drawCard(this.Deck.getCardDeck());
        this.Dealer.addDealerCard(dealerCard);
        this.Dealer.addDealerScore(
          this.Player.getPlayerCardValue(dealerCard[1])
        );

        document.getElementById("dealerScore").innerHTML =
          this.Dealer.getDealerScore();
        document.getElementById("dealerCards").innerHTML =
          this.Dealer.getDealerCard();
        dealerScore = this.Dealer.getDealerScore();
      }
    }

    this.updateGame(1);
  }

  updateGame(finished) {
    if (finished) {
      this.changeButtonState();
      document.getElementById("result").innerHTML =
        "<b>VALID!</b> You have stuck on " + this.Player.getPlayerScore() + "!";
    } else if (this.Player.getPlayerScore() > 21) {
      this.changeButtonState();
      document.getElementById("result").innerHTML = "<b>BUST!</b> You lose!";
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
