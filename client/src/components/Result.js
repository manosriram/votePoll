import React, { Component } from "react";
import "./Card.css";

class Result extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataStore: []
    };
  }

  componentDidMount() {
    this.setState(
      {
        data: this.props.data[0]
      },
      () => {
        var storeData = [];

        this.state.data.map((ele, ind) => {
          storeData.push(this.state.data[ind][0]);
        });
        this.setState({ dataStore: storeData });
      }
    );
  }

  render() {
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
                Rank {ind + 1} -- {ele}
                <hr />
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Result;
