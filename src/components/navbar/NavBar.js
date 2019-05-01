import React from "react";
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Custom Bets</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Sign In</Nav.Link>
      <Nav.Link onClick={console.log("woo")} href="#features">Create Account</Nav.Link>
      <Nav.Link href="#features">How does this work</Nav.Link>
      <Nav.Link href="#pricing">Our fees</Nav.Link>
      <Nav.Link href="#pricing">Boring info</Nav.Link>
    </Nav>
  </Navbar>
  );
};

export default NavBar;
