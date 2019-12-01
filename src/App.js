import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Particles from "react-particles-js";
import SignInHome from "./components/SignInHome";
import Profile from "./components/Profile";
import MyBets from "./components/MyBets";
import CreateBet from "./components/CreateBet";
import SignIn from "./components/signIn";
import Home from "./components/Home";
import HowThisWorks from "./components/HowThisWorks";
import Fees from "./components/Fees";
import CreateAccount from "./components/CreateAccount";
import Buy from "./components/Buy";
//import MoreInfo from './components/MoreInfo';

//import BuyConfirm from "./components/BuyConfirm";
 
let cur; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      a : 1,
      email: '',
      userId: '000',
      route: 'home'
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

loadUser = (email, id) => {
   this.setState({email: email});
   this.setState({userId: id});
 } 


unloadUser = () => {
  this.setState({email: ''});
}

reload = (num) => {
  this.setState({state: this.state});
}

// requireAuth = (nextState, replace) => { 
//     replace({
//       pathname: '/sign-In'
//     })
// }


changeRoute = (newer) =>{
  this.setState({'route' : newer});
}

  render() {
    let { route } = this.state;

    if(route === 'home'){
         cur =  <Home changeRoute={this.changeRoute} loadUser={this.loadUser}/>
    }
    if(route === 'Reg'){
         cur =  <CreateAccount 
         changeRoute={this.changeRoute} 
         loadUser={this.loadUser}
         />
    }
  

    if(route === 'Fees'){
             cur =  <Fees changeRoute={this.changeRoute}/>
    }

    if(route === 'weWork'){
        cur =  <HowThisWorks changeRoute={this.changeRoute}/>
    }
    if(this.state.route === 'Explore'){
         cur =  <SignInHome changeRoute={this.changeRoute} unloadUser={this.unloadUser}
          email={this.state.email} reload={this.reload} loadData={this.loadData}/>
    }
    if(route === 'Create'){
         cur =  <CreateBet changeRoute={this.changeRoute} unloadUser={this.unloadUser} 
         userid={this.state.userId}/>
    }


    if(route === 'myBets'){
         cur =  <MyBets changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>

    }
   
    if(route === 'Profile'){
         cur =  <Profile changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
    }
    
    if(route === 'SignIn'){ 
         cur =  <SignIn 
         changeRoute={this.changeRoute}
            loadUser={this.loadUser}/>
    }

    if(route === "buy"){
      cur = <Buy changeRoute={this.changeRoute}/>;
    }

    return (
      <div>
        <Particles className="particles" params={this.backgroundOptions} />
        {cur}
      </div>
    );
  }
}

export default App; 