import React, { Component } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class NavBar extends Component {
  ex = () => {
    this.props.changeRoute("Explore");
  }
  Create = () => {
    this.props.changeRoute("Create");
  }
  mine = () => {
    this.props.changeRoute("myBets");
  }
   profs = () => {
    this.props.changeRoute("Profile");
  }
  groups = () => {
    this.props.changeRoute("groups");
  }
  buy = () => {
    this.props.changeRoute("buy");
  }
  outies = () => {
    this.props.unloadUser();
    this.props.changeRoute("home");
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Explore">Custom Bets</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={this.ex}>Explore</Nav.Link>
          <Nav.Link onClick={this.Create}>Create a Bet</Nav.Link> 
          <Nav.Link onClick={this.mine}>My bets</Nav.Link>
          <Nav.Link onClick={this.profs}>Profile</Nav.Link>
          <Nav.Link onClick={this.groups}>My groups</Nav.Link>
          <Nav.Link onClick={this.buy}>Get more B</Nav.Link>
          <Nav.Link className='white'>Balance:</Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link onClick={this.outies}>Sign out</Nav.Link>
        </Form>
      </Navbar>
    );
  }
}
