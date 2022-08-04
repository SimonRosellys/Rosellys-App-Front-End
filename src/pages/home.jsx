import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          className="home-logo"
          src={require("../images/ALBC ROSELLYS LOGO CLEAR BG.JPG")}
          alt={"Rosellys Logo"}
        />
        <h1 className="dev">Log in section will be here</h1>
      </div>
    );
  }
}

export default Home;
