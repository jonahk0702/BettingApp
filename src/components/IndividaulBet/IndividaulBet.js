import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class NavBar extends Component{
  render(){
  return (
    <div >
      <div className='bg-blue pointer' href="">
        <Container>
          <Row>
            <Col xs={6} className='f4 tl'>{this.props.name}</Col>
            <Col className='ba'>1/3 odds at 10$</Col>
            <Col>01.01.2020</Col>
          </Row>
        </Container>
      </div>
      <br/>
    </div>
  );
}
}
