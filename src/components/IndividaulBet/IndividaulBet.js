import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class NavBar extends Component{
  render(){
  return (
    <div >
      <div className='ba tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc ba ma1 b--dashed bg-blue'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>1:3</Col>
            <Col xs={2} className='bb bt ma1'>BXX.XX</Col>
            <Col xs={2} className='bb bt ma1'>01.01.2020</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
              <button>More Info</button>    
              
              <button>Take Bet</button>
            </Col>
          </Row>
        </Container>

      </div>
      <br/>
    </div>
  );
}
}
