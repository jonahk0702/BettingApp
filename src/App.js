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
import MoreInfo from './components/MoreInfo';
import Register from "./components/Register/Register";

//import BuyConfirm from "./components/BuyConfirm";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    user: {
      email: '',
      userId: ''
    }
  };
  }

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

loadUser = (data) => {
  let {email} = data;
  this.setState({user: {
    email: email
  }})
}


requireAuth = (nextState, replace) => { 
    replace({
      pathname: '/sign-In'
    })
  

}

  render() {
    return (
      <div>
        <Particles className="particles" params={this.backgroundOptions} />

        {
          <BrowserRouter>
            <Switch>

              <Route exact path="/Explore" component={SignInHome} />
              <Route exact path="/My-Bets" component={MyBets} />
              <Route exact path="/Create-Bet" component={CreateBet} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/" component={Home} />
              <Route exact path="/MoreInfo" component={MoreInfo} /> 
              <Route exact path="/sign-In" component={signIn} />
              <Route exact path="/Create-Account" component={CreateAccount} loadUser={this.loadUser}/>
              <Route exact path="/howWeWork" component={HowThisWorks} />
              <Route exact path="/Our-Fees" component={Fees} />
            </Switch>
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App; 