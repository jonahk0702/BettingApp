import React, { Component } from "react";
import Register from "./Register/Register";
import NavBar from "./navbar/NavBar";

class CreateAccount extends Component {
  constructor(props) {
    super();
    this.state = {
    
  };
}

display = () => {
  console.log("I work");
}  

  render() {
   
    return <div>
    <NavBar/>
      <Register loadUser={this.display}/>
    </div>;
  }
}

export default CreateAccount;
