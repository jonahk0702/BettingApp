import React, { Component } from "react";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";

class signInReg extends Component {
  constructor(props) {
    super();
    this.state = {
      createA: false
    };
  }
  handleSwitch = create => {
    if (create) {
      this.setState({ createA: true });
    } else {
      this.setState({ createA: false });
    }
  };

  render() {
    let current;
    if (this.state.createA) {
      current = <Register handleSwitch={this.handleSwitch} />;
    } else {
      current = <SignIn handleSwitch={this.handleSwitch} />;
    }
    return <div>{current}</div>;
  }
}

export default signInReg;
