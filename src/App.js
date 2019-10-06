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
//import MoreInfo from './components/MoreInfo';

//import BuyConfirm from "./components/BuyConfirm";

let cur; 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    user: {
      email: '',
      userId: '',
      
    },
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

loadUser = (email, id) => {

  this.setState({user: {
    email: email,
    userId: id
  }})
  console.log(id + " is ID");
}

unloadUser = () => {
  this.setState({email: ''});
  console.log("em" + this.state.email);
}


requireAuth = (nextState, replace) => { 
    replace({
      pathname: '/sign-In'
    })
  

}
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
  

    if(this.state.route === 'Fees'){
             cur =  <Fees changeRoute={this.changeRoute}/>
    }

    if(this.state.route === 'weWork'){
        cur =  <HowThisWorks changeRoute={this.changeRoute}/>
    }
    if(this.state.route === 'Explore'){
         cur =  <SignInHome changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
    }
    if(this.state.route === 'Create'){
         cur =  <CreateBet changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
    }


    if(this.state.route === 'myBets'){
         cur =  <MyBets changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>

    }
   
    if(this.state.route === 'Profile'){
         cur =  <Profile changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
    }
    
    if(this.state.route === 'SignIn'){ 
         cur =  <SignIn 
         changeRoute={this.changeRoute}
            loadUser={this.loadUser}/>
    }

/*

    if(this.state.route === 'moreInfo'){
             cur =  <MoreInfo changeRoute={this.changeRoute}/>
    }

    if(this.state.route === 'signIn'){
             cur =  <signIn changeRoute={this.changeRoute}/>
    }    

    
    */

    return (
      <div>
        <Particles className="particles" params={this.backgroundOptions} />

        {
/*          <BrowserRouter>
            <Switch>

              <Route exact path="/Explore" component={SignInHome} />
              <Route exact path="/My-Bets" component={MyBets} />
              <Route exact path="/Create-Bet" component={CreateBet} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/" component={Home} />
              <Route exact path="/MoreInfo" component={MoreInfo} /> 
              <Route exact path="/sign-In" component={signIn} />
              <Route exact path="/Create-Account" component={CreateAccount} />
              <Route exact path="/howWeWork" component={HowThisWorks} />
              <Route exact path="/Our-Fees" component={Fees} />
            </Switch>
          </BrowserRouter>
 */       }

      
        {cur}
     
      </div>
    );
  }
}

export default App; 