import React, { Component } from "react";
import Card from "./card";

let x = 4;
let y = 3;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSize: {
        x: x,
        y: y,
        containerX: 600,
        containerY: 600,
        spacing: 16,
      },
      nbrFlipped: 0,
      nbrPairs: (x * y) / 2,
      cards: [],
      flipped: [],
    };
    this.currentFlipped = [];
    this.pairs = [];
    this.found = [];
  }
  componentWillMount() {
    this.generateCardsArr();
  }

  generateCardsArr = () => {
    for (let i = 0; i < this.state.nbrPairs; i++) {
      this.pairs.push(i, i);
    }
    this.shuffleArr();
    this.generateCards();
  };

  shuffleArr = () => {
    this.pairs = this.pairs.sort(() => 1);
  };

  generateCards = () => {
    for (let cardItem = 0; cardItem < this.pairs.length; cardItem++) {
      this.state.cards.push(
        <Card
          data={this.pairs[cardItem]}
          width={
            this.state.gameSize.containerX / this.state.gameSize.x -
            this.state.gameSize.spacing * 2
          }
          height={
            this.state.gameSize.containerY / this.state.gameSize.y -
            this.state.gameSize.spacing * 2
          }
          spacing={this.state.gameSize.spacing}
          handleCardFlip={this.handleCardFlip}
          isFlipped={this.state.isFlipped}
          // img={}
        />
      );
    }
  };

  checkCards = (currentFlipped) => {
    if (currentFlipped.length > 1) {
      if (currentFlipped[0].dataset.card === currentFlipped[1].dataset.card) {
        this.currentFlipped = [];
        this.found.push(currentFlipped[0].dataset.card);
        document
          .querySelectorAll(
            `.flip-card[data-card = '${currentFlipped[0].dataset.card}']`
          )
          .forEach((element) => {
            element.classList.add("won");
          });
      } else {
        setTimeout(() => {
          document.querySelectorAll(".flip-card").forEach((element) => {
            if (element.classList.contains("won")) {
              return;
            } else {
              element.children[0].classList.remove("flipped");
            }
            this.currentFlipped = [];
          });
        }, 700);
      }
      this.checkWin();
    }
  };
  handleCardFlip = (event) => {
    let card = event.currentTarget.children[0];
    if (event.currentTarget.classList.contains("won")) return;
    card.classList.add("flipped");
    this.currentFlipped.push(event.currentTarget);
    this.checkCards(this.currentFlipped);
  };
  checkWin = () => {
    if (this.found.length === this.pairs.length / 2) console.log("WON!");
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="title">Memory</h1>
          <div
            style={{
              width: this.state.gameSize.containerX + "px",
              height: this.state.gameSize.containerY + "px",
            }}
            className="cards-container"
          >
            {this.state.cards.map((card) => {
              return card;
            })}
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Main;
