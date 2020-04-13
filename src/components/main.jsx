import React, { Component } from "react";
import Card from "./card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameSize: {
        z: 3,
        y: 3,
      },
      cardWidth: 200,
      nbrFlipped: 0,
      nbrPairs: 0,
      currentFlipped: [],
      flipped: [],
    };
  }
  generateCards = (cardsNbr) => {};

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
          <div className="cards-container">
            <Card
              data={"hello"}
              width={this.state.cardWidth}
              height={this.state.cardWidth}
              handleCardFlip={this.handleCardFlip}
              isFlipped={this.state.isFlipped}
            />
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Main;
