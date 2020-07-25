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
import BetInfo from './components/learn/BetInfo';
import TsAndCs from  './components/tsAndCs/TermsAndConditions';
import Groups from './components/myGroups/Groups';

//import MoreInfo from './components/MoreInfo';

//import BuyConfirm from "./components/BuyConfirm";
 
let cur; 
let waiter = false;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    a : 1,
    email: '',
    userId: '000',  
    route: 'home',
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

loadUser = (email) => {
   this.setState({email: email});
   this.getId(email);   
 }  


unloadUser = () => {
  this.setState({email: ''});
}

reload = (num) => {
  this.setState({state: this.state});
}




changeRoute = (newer) =>{
  
  this.setState({'route' : newer});
}

getId =  async (email) => {
    fetch('http://localhost:3000/getId', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
        email: email
     })
    })

    .then(response => response.json())
    .then(data => {
      waiter = true; 
      this.setState({userId: data});
      })
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

    if(route === 'betInfo'){ 
             cur =  <BetInfo changeRoute={this.changeRoute}/>
    }

    if(route === 'weWork'){
        cur =  <HowThisWorks changeRoute={this.changeRoute}/>
    }
    if(this.state.route === 'Explore' && waiter === true){
        cur =  <SignInHome changeRoute={this.changeRoute} unloadUser={this.unloadUser}
          email={this.state.email} reload={this.reload} userId={this.state.userId}/>
    } 
   if(route === 'Create'){ 
         cur =  <CreateBet changeRoute={this.changeRoute} unloadUser={this.unloadUser} 
         userId={this.state.userId} email={this.state.email}/>
    }
    if(route === 'groups'){
      cur =  <Groups changeRoute={this.changeRoute} unloadUser={this.unloadUser} 
      userId={this.state.userId} email={this.state.email}/>

    }


    if(route === 'myBets'){
         cur =  <MyBets changeRoute={this.changeRoute} unloadUser={this.unloadUser}
         userId={this.state.userId} email={this.state.email}/>

    }
   
   if(route === 'TermsAndConditions'){
        cur =  <TsAndCs changeRoute={this.changeRoute} unloadUser={this.unloadUser} />

    }

    if(route === 'Profile'){
         cur =  <Profile changeRoute={this.changeRoute} unloadUser={this.unloadUser} userId={this.state.userId}/>
    }
    
    if(route === 'SignIn'){ 
         cur =  <SignIn 
         changeRoute={this.changeRoute}
          loadUser={this.loadUser}/>
    }









    if(route === "buy"){
      cur = <Buy changeRoute={this.changeRoute} unloadUser={this.unloadUser}  
      email={this.state.email} userId = {this.state.userId}
      />;
    }

    return (
      <div>
        <title>Costume bets </title>
        <Particles className="particles" params={this.backgroundOptions} />
        {cur}

      </div>
    );
  }
}

export default App; 