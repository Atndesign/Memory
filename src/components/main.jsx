import React, { Component } from "react";
import Card from "./card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardWidth: 200,
      nbrFlipped: 0,
      nbrPairs: 0,
      currentFlipped: [],
      flipped: [],
    };
  }
  generateCards = (cardsNbr) => {};

  checkCards = (currentFlipped) => {};
  handleCardFlip = () => {};

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="title">Memory</h1>
          <div className="cards-container">
            <Card
              width={this.state.cardWidth}
              height={this.state.cardWidth}
              handleCardFlip={this.handleCardFlip}
            />
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Main;
