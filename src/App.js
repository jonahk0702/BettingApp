import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Particles from "react-particles-js";
import signInReg from './components/signInReg';
import Home from './components/Home';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  state = {

  };

 

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
        <NavBar />
        <Particles className="particles" params={this.backgroundOptions} />
        <BrowserRouter>
          <Switch> 

        {/*
          Each pages just needs it own Route.
          The borswer and switch is n=just needed.
        */}
              <Route path="/sign-In" component = {signInReg}/>
              <Route path="/" component = {Home}/>


          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;