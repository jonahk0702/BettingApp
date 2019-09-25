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


  render() {
   
    return <div>
    <NavBar changeRoute={this.changeRoute}/>
     <Register changeRoute={this.changeRoute}/>
   }
    
                      
    </div>;
  }
}

export default CreateAccount;
