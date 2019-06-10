import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Particles from "react-particles-js";
import SignInHome from "./components/SignInHome";
import Profile from "./components/Profile";
import MyBets from "./components/MyBets";
import CreateBet from "./components/CreateBet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import signIn from "./components/signIn";
import Home from "./components/Home";
import HowThisWorks from "./components/HowThisWorks";
import Fees from "./components/Fees";
import CreateAccount from "./components/CreateAccount";

class App extends Component {
  state = {};

  backgroundOptions = {
    particles: {
      number: {
        value: 200,
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
        <Particles className="particles" params={this.backgroundOptions} />
        {
          <BrowserRouter>
            <Switch>
              Each pages just needs it own Route. The borswer and switch is
              n=just needed.
              <Route path="/sign-In" component={signIn} />
              <Route path="/Create-Account" component={CreateAccount} />
              <Route exact path="/" component={Home} />
              <Route path="/howWeWork" component={HowThisWorks} />
              <Route path="/Our-Fees" component={Fees} />
              <Route path="/Explore" component={SignInHome} />
              <Route path="/profile" component={Profile} />
              <Route path="/My-Bets" component={MyBets} />
              <Route path="/Create-Bet" component={CreateBet} />
            </Switch>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;
