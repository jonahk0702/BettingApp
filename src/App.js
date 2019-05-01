import React, { Component } from "react";
import "./App.css";
import SignInOrReg from "./SignInOrReg";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Particles from "react-particles-js";

class App extends Component {
  state = { isLogin: true };

  handleSwitch = () => {
    this.state.isLogin === true
      ? this.setState({ isLogin: false })
      : this.setState({ isLogin: true });
  };

  backgroundOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };

  render() {
    return (
      <div>
        <NavBar onSwitch={this.handleSwitch} page={this.state.isLogin} />
        <SignInOrReg onSwitch={this.handleSwitch} page={this.state.isLogin} />
        <Particles className="particles" params={this.backgroundOptions} />
      </div>
    );
  }
}

export default App;