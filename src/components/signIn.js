import React, { Component } from "react";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import NavBar from "./navbar/NavBar";

class signIn extends Component {
  constructor(props) {
    super();
    this.state = {
      onCreateAccount: false,
    
  

  };
}
   handleSwitch = (onCreateAccountPage) => {
   if(onCreateAccountPage){
    this.setState({ onCreateAccount: true });
   }else{
       this.setState({ onCreateAccount: false })
       }
    };
  

  render() {
    let current;
    if (this.state.onCreateAccount) {
      current = <Register handleSwitch={this.handleSwitch} />;
    } else {
      current = <SignIn handleSwitch={this.handleSwitch} />;
    }
    return <div>
    <NavBar/>
     {current}</div>;
  }
}

export default signIn;
