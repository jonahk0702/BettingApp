import React, { Component } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class NavBar extends Component {
  HWW = () => {
    this.props.changeRoute("weWork");
  }
  feess = () => {
    this.props.changeRoute("Fees");
  }
  
  homer = () => {
   this.props.changeRoute("home"); 
  }
   innes = () => {
   this.props.changeRoute("SignIn"); 
  }

  render() {


    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Custom Bets</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={this.homer}>Home</Nav.Link>
          <Nav.Link onClick={this.HWW}>How does this work</Nav.Link>
          <Nav.Link onClick={this.feess}>Our fees</Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link onClick={this.innes}>Sign In/Create Account</Nav.Link>
        </Form>
      </Navbar>
    );
  }
}
