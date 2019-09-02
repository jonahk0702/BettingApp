import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pages.css";
import NavBar from "./navbar/NavBar";

class Fees extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  callCur = () =>{
    


  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="tc ">
          <br />
          <br />
          <br />
          <h1 className="tc white i f1 font">Lets talk about fees</h1>
          <br />
          <br />
          <Container className="tc f3 solidBR">
            <Row>
              <Col className="tc f3 solidBR">
                We want to be as transparent as possible <hr />
                <p className="f4">
                  We try to make our costs as simple as possible. We have made our own currency in order to make
                  betting with people all over the world super simple. Our exange rates are updated reguarly.
                  WE charge a 5% conversion fee when you put in or take out money. We also charge a 5% fee on any bet won.
                  <br />
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='ma3 br bl'>
                Genereal Fees <hr />
                <p className="tl f4">
                  - We charge a 5% conversion fee when you put in or take out money. <br/>
                  - We charge a 5% fee on any bet won.
                  <br />
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='ma3 br bl'>
                Extra Ordinary Fees <hr />
                <p className="tl f4">
                  - We charge a 10% Query fee. <br/>
                  - We charge a 10% fee unresolved bets.
                  <br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <br/>
      </div>
    );
  }
}

export default Fees;
