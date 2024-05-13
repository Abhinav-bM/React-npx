import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childState: this.props.parentState,
      color: "black",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "yellow",
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Parent State : {this.props.parentState}</h1>
        <h2>Child State : {this.state.childState}</h2>
        <h3 style={{ color: this.state.color }}>Color</h3>
      </div>
    );
  }
}

export default Child;
