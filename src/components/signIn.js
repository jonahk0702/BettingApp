import React, { Component } from "react";
import SignIn from "./SignIn/SignIn";
import NavBar from "./navbar/NavBar";

class signIn extends Component {
  constructor(props) {
    super();
    this.state = {
      onCreateAccount: false,
    
  

  };
}
 

  render() {
    let current;
      current = <SignIn handleSwitch={this.handleSwitch} />;
    
    return <div>
    <NavBar/>
     {current}</div>;
  }
}

export default signIn;
