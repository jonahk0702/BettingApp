import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./pages.css";
class Fees extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="tc">
        <br />
        <br />
        <br />
        <h1 className="tc white i grow f1 font">Lets talk about fees</h1>
        <br />
        <br />
        <Container>
          <Row>
            <Col className="tc f3 solidBR">
              We want to be as transparent as possible <hr />
              <p className="tl f4">
                Fill this in later
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Fees;
