import React, { Component } from "react";
import NavbarIn from "./navbar/NavbarIn";

class Buy extends Component{
    constructor(props) {
        super(); 
        this.state = {

        };
      }

      changeRoute = (name) =>{
        this.props.changeRoute(name); 
      }

      unloadUser = () => {
        this.props.unloadUser();
      }

      render(){
          return(
              <div>
                  <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
              </div>
          )
      }
}

export default Buy;