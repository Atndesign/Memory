import React, { Component } from "react";
import Card from "./card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSize: {
        x: 3,
        y: 3,
        containerX: 600,
        containerY: 600,
        spacing: 16,
      },
      nbrFlipped: 0,
      nbrPairs: 0,
      cards: [],
      currentFlipped: [],
      flipped: [],
    };
  }
  componentWillMount() {
    this.generateCards();
  }
  generateCards = () => {
    for (let cardX = 0; cardX < this.state.gameSize.x; cardX++) {
      for (let cardY = 0; cardY < this.state.gameSize.y; cardY++) {
        this.state.cards.push(
          <Card
            key={cardX + ":" + cardY}
            data={"hello"}
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
          />
        );
      }
    }
  };

  checkCards = (currentFlipped) => {};
  handleCardFlip = (event) => {
    let card = event.currentTarget.children[0];
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped");
    } else {
      card.classList.add("flipped");
    }
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
