import React, { Component } from "react";
import Register from "./Register/Register";
import NavBar from "./navbar/NavBar";

class CreateAccount extends Component {
  constructor(props) {
    super();
    this.state = {
    
  };
}

changeRoute = (name) => {
  this.props.changeRoute(name);
}

loadUser = name => {
  this.props.loadUser(name);
}


  render() {
   
    return <div>
    <NavBar changeRoute={this.changeRoute}/>
     <Register changeRoute={this.changeRoute} loadUser={this.loadUser}/>
   
    
                      
    </div>;
  }
}

export default CreateAccount;
