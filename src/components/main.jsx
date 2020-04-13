import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="title">Memory</h1>
          <div className="cards-container"></div>
        </header>
      </React.Fragment>
    );
  }
}

export default Main;
