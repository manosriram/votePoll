import React, { Component } from "react";

class Card2 extends Component {
  constructor() {
    super();
    this.state = {
      baseRating: 1200
    };
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Card2</h1>
      </div>
    );
  }
}

export default Card2;
