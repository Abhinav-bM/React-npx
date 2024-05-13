import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childState: this.props.parentState,
    };
  }

  render() {
    return (
      <div>
        <h1>Parent State : {this.props.parentState}</h1>
        <h2>Child State : {this.state.childState}</h2>
      </div>
    );
  }
}

export default Child
