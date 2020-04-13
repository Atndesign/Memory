import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        data-card={this.props.data}
        className="flip-card"
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px",
          margin: this.props.spacing + "px",
        }}
        onClick={(e) => this.props.handleCardFlip(e)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <b className="question-mark">?</b>
          </div>
          <div
            className="flip-card-back"
            style={{
              backgroundImage: `url('https://picsum.photos/${this.props.width}/${this.props.height}?random=${this.props.img}')`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Card;
