import React, {Component} from "react";
import { Nav, Navbar, } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.css";

export default class NavBar extends Component{
  render(){
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Custom Bets</Navbar.Brand>
      <Nav className="mr-auto">
      <React.Fragment>
        <Nav.Link href="/sign-In">Sign In</Nav.Link>
        </React.Fragment>
       
        <Nav.Link href="#features">How does this work</Nav.Link>
        <Nav.Link href="#pricing">Our fees</Nav.Link>
        <Nav.Link href="#pricing">Boring info</Nav.Link>
      </Nav>
    </Navbar>
  );
}



}