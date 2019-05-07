import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarIn />
        <br />
        <br />
        <br />
        <h1 className="tc white i grow f1 font">My Profile</h1>
        <br />
        <br />
        <Container>
          <Row>
            <Col className="tc f3 solidBR bg-white">
              How should we order all open Bets?
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
