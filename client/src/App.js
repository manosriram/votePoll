import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
