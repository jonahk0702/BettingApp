import React, { Component } from "react";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import "./App";
import "tachyons";

class SignInOrReg extends Component {
  Determine = () => {
    if (this.props.page === true) {
      return <SignIn onSwitch={this.props.onSwitch} />;
    } else {
      return <Register onSwitch={this.props.onSwitch} />;
    }
  };

  render() {
    return <div>{this.Determine()}</div>;
  }
}

export default SignInOrReg;
