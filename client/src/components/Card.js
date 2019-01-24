import React, { Component } from "react";
import "./Card.css";
const axios = require("axios");

class Card extends Component {
  constructor() {
    super();
    this.state = {
      Ra: 1200,
      Rb: 1200,
      Rc: 1200,
      Rd: 1200,
      card: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    var option = -1;
    this.setState({ card: this.state.card + 1 });
    if (ev.target.id === "steve1" || ev.target.id === "elon1") {
      if (ev.target.id === "steve1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Ra,
          Rb: this.state.Rb,
          option: option
        })
        .then(res =>
          this.setState({ Ra: res.data.Ra, Rb: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "elon2" || ev.target.id === "bill1") {
      if (ev.target.id === "elon2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rb,
          Rb: this.state.Rc,
          option: option
        })
        .then(res =>
          this.setState({ Rb: res.data.Ra, Rc: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "mark1" || ev.target.id === "steve2") {
      if (ev.target.id === "mark1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Ra,
          Rb: this.state.Rd,
          option: option
        })
        .then(res =>
          this.setState({ Ra: res.data.Ra, Rd: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "mark2" || ev.target.id === "bill2") {
      if (ev.target.id === "mark2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rd,
          Rb: this.state.Rc,
          option: option
        })
        .then(res =>
          this.setState({ Rd: res.data.Ra, Rc: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }
  }

  render() {
    if (this.state.card === 1) {
      return (
        <div id="com">
          <div
            id="steve1"
            className="steve"
            onClick={this.handleClick}
            ref="one"
          />
          <h3 id="or">or</h3>
          <div
            id="elon1"
            className="elon"
            onClick={this.handleClick}
            ref="two"
          />
        </div>
      );
    }
    if (this.state.card === 2) {
      return (
        <div>
          <div id="com">
            <h3 id="or">or</h3>
            <div id="elon2" className="elon2" onClick={this.handleClick} />
            <div id="bill1" className="bill1" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 3) {
      return (
        <div>
          <div id="com">
            <h3 id="or">or</h3>
            <div id="mark1" className="mark1" onClick={this.handleClick} />
            <div id="steve2" className="steve2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 4) {
      return (
        <div>
          <div id="com">
            <h3 id="or">or</h3>
            <div id="mark2" className="mark2" onClick={this.handleClick} />
            <div id="bill2" className="bill2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }
    if (this.state.card > 4) {
      return (
        <div>
          <h2>Thanks For Voting : </h2>
          <div id="res">
            <h2>Steve -> {this.state.Ra}</h2>
            <h2>Elon -> {this.state.Rb}</h2>
            <h2>Bill -> {this.state.Rc}</h2>
            <h2>Mark -> {this.state.Rd}</h2>
          </div>
        </div>
      );
    }
  }
}
export default Card;
