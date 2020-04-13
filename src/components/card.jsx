import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="flip-card"
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px",
        }}
        onClick={(e) => this.props.handleCardFlip()}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <b className="question-mark">?</b>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
