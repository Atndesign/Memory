import React, { Component } from "react";
import Card from "./card";

let x = 2;
let y = 2;

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
      cards: 0,
      nbrFlipped: 0,
      flipped: [],
    };
    this.nbrPairs = 2;
    this.cards = [];
    this.currentFlipped = [];
    this.pairs = [];
    this.found = [];
  }
  componentWillMount() {
    this.init();
  }
  init = () => {
    document.querySelectorAll(`.flip-card`).forEach((card) => {
      card.classList.remove("won", "flipped");
    });
    this.cards = [];
    this.currentFlipped = [];
    this.pairs = [];
    this.found = [];
    setTimeout(() => {
      this.generateCardsArr();
    }, 100);
  };
  generateCardsArr = () => {
    for (let i = 0; i < this.nbrPairs; i++) {
      this.pairs.push(i, i);
    }
    this.shuffleArr();
    this.generateCards();
  };

  shuffleArr = () => {
    this.pairs = this.pairs.sort(() => 0.5 - Math.random());
  };

  generateCards = () => {
    for (let cardItem = 0; cardItem < this.pairs.length; cardItem++) {
      this.cards.push(
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
          img={this.pairs[cardItem]}
        />
      );
    }
    this.setState({
      cards: this.cards,
    });
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
  checkWin = () => {
    if (this.found.length === this.pairs.length / 2) console.log("WON!");
  };
  handleCardFlip = (event) => {
    let card = event.currentTarget.children[0];
    if (event.currentTarget.classList.contains("won")) return;
    card.classList.add("flipped");
    this.currentFlipped.push(event.currentTarget);
    this.checkCards(this.currentFlipped);
  };
  handleNewSize = (e) => {
    let height = parseInt(e.target.value.split("x")[0]);
    let width = parseInt(e.target.value.split("x")[1]);
    this.setState({
      gameSize: {
        x: width,
        y: height,
        containerX: 600,
        containerY: 600,
        spacing: 16,
      },
    });
    this.nbrPairs = (width * height) / 2;
    this.init();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <header>
            <h1 className="title">Memory</h1>
            <select
              className="form-control"
              name=""
              id=""
              onChange={(e) => this.handleNewSize(e)}
            >
              <option value="2x2">2x2</option>
              <option value="3x2">3x2</option>
              <option value="4x2">2x4</option>
              <option value="4x3">3x4</option>
              <option value="4x4">4x4</option>
            </select>
          </header>
          <div
            style={{
              width: this.state.gameSize.containerX + "px",
              height: this.state.gameSize.containerY + "px",
            }}
            className="cards-container"
          >
            {this.cards.map((card) => {
              return card;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
