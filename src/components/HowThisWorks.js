import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./navbar/NavBar";
import "./pages.css";
class HowThisWorks extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="tc">
          <br />
          <br />
          <br />
          <h1 className="tc white i grow f1 font">
            Wait, so how does this really work?
          </h1>
          <br />
          <br />
          <Container>
            <Row>
              <Col className="tc f3 solidBR">
                What is Custom bets? <hr />
                <p className="tl f4">
                  Proper discritipn <br />
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
      </div>
    );
  }
}

export default HowThisWorks;
