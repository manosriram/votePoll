import React, { Component } from "react";
import "./Card.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" id="nav">
          <a className="navbar-brand" href="/" id="nav">
            <strong> YES </strong> or <strong> NO</strong>
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
