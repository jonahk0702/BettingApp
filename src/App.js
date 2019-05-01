import React, { Component } from "react";
import "./App.css";
import SignInOrReg from "./SignInOrReg";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = { isLogin: true };

  handleSwitch = () => {
    this.state.isLogin === true
      ? this.setState({ isLogin: false })
      : this.setState({ isLogin: true });
  };
  render() {
    return (
      <div>
        <NavBar />
        <SignInOrReg onSwitch={this.handleSwitch} page={this.state.isLogin} />
        {console.log(this.state.isLogin)};
      </div>
    );
  }
}

export default App;
