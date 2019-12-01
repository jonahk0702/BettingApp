import React, { Component } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class NavBar extends Component{
  render(){
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Custom Bets</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/howWeWork">How does this work</Nav.Link>
        <Nav.Link href="/Our-Fees">Our fees</Nav.Link>
      </Nav>
      <Form inline>
      
      <Nav.Link href="/sign-In">Sign In/Create Account</Nav.Link>
    </Form>
    </Navbar>
  );
}}
