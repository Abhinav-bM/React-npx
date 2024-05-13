import React, { Component } from "react";
import Child from "./Child";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  changeColor = () => {
    this.setState({
      color: this.state.color === "red" ? "green" : "red",
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>
          favourite color is {this.state.color}
        </h1>
        <button onClick={this.changeColor}>click Me</button>
        <Child parentState={this.state.color} />
      </div>
    );
  }
}

export default Header;
