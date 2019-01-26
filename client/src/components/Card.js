import Card2 from "./Card2";
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
      Re: 1200,
      Rf: 1200,
      Rg: 1200,
      Rh: 1200,
      Ri: 1200,
      Rj: 1200,
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

    if (ev.target.id === "sundar1" || ev.target.id === "satya1") {
      if (ev.target.id === "sundar1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Re,
          Rb: this.state.Rf,
          option: option
        })
        .then(res =>
          this.setState({ Re: res.data.Ra, Rf: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "tim1" || ev.target.id === "sundar1") {
      if (ev.target.id === "tim1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rg,
          Rb: this.state.Re,
          option: option
        })
        .then(res =>
          this.setState({ Rg: res.data.Ra, Re: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "tim2" || ev.target.id === "satya2") {
      if (ev.target.id === "tim2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rg,
          Rb: this.state.Rf,
          option: option
        })
        .then(res =>
          this.setState({ Rg: res.data.Ra, Rf: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "jeff1" || ev.target.id === "larry1") {
      if (ev.target.id === "jeff1") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rh,
          Rb: this.state.Ri,
          option: option
        })
        .then(res =>
          this.setState({ Rh: res.data.Ra, Ri: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "larry2" || ev.target.id === "jack1") {
      if (ev.target.id === "larry2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Ri,
          Rb: this.state.Rj,
          option: option
        })
        .then(res =>
          this.setState({ Ri: res.data.Ra, Rj: res.data.Rb }, () => {
            console.log(this.state);
          })
        );
    }

    if (ev.target.id === "jeff2" || ev.target.id === "jack2") {
      if (ev.target.id === "jeff2") option = 1;
      else option = 2;
      axios
        .post("/rate/updateRating", {
          Ra: this.state.Rh,
          Rb: this.state.Rj,
          option: option
        })
        .then(res =>
          this.setState({ Rh: res.data.Ra, Rj: res.data.Rb }, () => {
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
            <div id="mark2" className="mark2" onClick={this.handleClick} />
            <div id="bill2" className="bill2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 5) {
      return (
        <div>
          <div id="com">
            <div id="sundar1" className="sundar1" onClick={this.handleClick} />
            <div id="satya1" className="satya1" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 6) {
      return (
        <div>
          <div id="com">
            <div id="tim1" className="tim1" onClick={this.handleClick} />
            <div id="sundar2" className="sundar2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 7) {
      return (
        <div>
          <div id="com">
            <div id="tim2" className="tim2" onClick={this.handleClick} />
            <div id="satya2" className="satya2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 8) {
      return (
        <div>
          <div id="com">
            <div id="jeff1" className="jeff1" onClick={this.handleClick} />
            <div id="larry1" className="larry1" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 9) {
      return (
        <div>
          <div id="com">
            <div id="larry2" className="larry2" onClick={this.handleClick} />
            <div id="jack1" className="jack1" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card === 10) {
      return (
        <div>
          <div id="com">
            <div id="jeff2" className="jeff2" onClick={this.handleClick} />
            <div id="jack1" className="jack2" onClick={this.handleClick} />
          </div>
        </div>
      );
    }

    if (this.state.card > 10) {
      // return (
      //   <div>
      //     <h2>Thanks For Voting : </h2>
      //     <div id="res">
      //       <h2>Steve -> {this.state.Ra}</h2>
      //       <h2>Elon -> {this.state.Rb}</h2>
      //       <h2>Bill -> {this.state.Rc}</h2>
      //       <h2>Mark -> {this.state.Rd}</h2>
      //       <h2>Sundar -> {this.state.Re}</h2>
      //       <h2>Satya -> {this.state.Rf}</h2>
      //       <h2>Tim -> {this.state.Rg}</h2>
      //       <h2>Jeff -> {this.state.Rh}</h2>
      //       <h2>Larry -> {this.state.Ri}</h2>
      //       <h2>Jack -> {this.state.Rj}</h2>
      //     </div>
      //   </div>
      // );
      return <Card2 data={this.state} />;
    }
  }
}
export default Card;
