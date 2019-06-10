import React, { Component } from "react";
import Register from "./Register/Register";
import NavBar from "./navbar/NavBar";

class signIn extends Component {
  constructor(props) {
    super();
    this.state = {
    
  

  };
}  
  render() {
   
    return <div>
    <NavBar/>
      <Register/>
    </div>;
  }
}

export default signIn;
