import React, { Component } from "react";
import "./Card.css";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataStore: [],
      showScore: 0,
      scores: []
    };
    this.showScore = this.showScore.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({ showScore: 0 });
  }

  showScore() {
    this.setState({ showScore: 1 });
  }

  componentDidMount() {
    this.setState(
      {
        data: this.props.data[0]
      },
      () => {
        var storeData = [];
        var scores = [];

        this.state.data.map((ele, ind) => {
          storeData.push(this.state.data[ind][0]);
          scores.push(this.state.data[ind][1]);
        });
        this.setState({ dataStore: storeData, scores: scores });
      }
    );
  }

  render() {
    if (this.state.showScore === 0) {
      return (
        <div>
          <div id="winner">
            <h1 id="win">
              Winner : <strong> {this.state.dataStore[0]}</strong>
            </h1>
          </div>
          <br />
          <br />
          {this.state.dataStore.map((ele, ind) => {
            return (
              <div key={ind} id="res">
                <h3>
                  Rank {ind + 1} :: {ele}
                  <hr />
                </h3>
              </div>
            );
          })}
          <button className="btn btn-primary" onClick={this.showScore}>
            Show Scores
          </button>
        </div>
      );
    } else if (this.state.showScore === 1) {
      return (
        <div>
          {this.state.scores.map((ele, ind) => {
            return (
              <div id="scores">
                <h3>
                  Rank {ind + 1} ::<strong> {this.state.dataStore[ind]}</strong>{" "}
                  :: {ele}
                  <hr />
                </h3>
              </div>
            );
          })}
          <button className="btn btn-primary" onClick={this.goBack}>
            Back
          </button>
        </div>
      );
    }
  }
}

export default Result;
