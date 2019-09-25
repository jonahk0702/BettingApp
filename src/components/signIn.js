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
 
changeRoute = (home) => {
  this.props.changeRoute(home);
}

loadUser = (data) => {
  this.props.loadUser(data);
}

  render() {
    let current;
      current = <SignIn loadUser={this.loadUser} changeRoute={this.changeRoute} handleSwitch={this.handleSwitch} />;
    
    return <div>
    <NavBar changeRoute={this.changeRoute}/>
     {current}</div>;
  }
}

export default signIn;
