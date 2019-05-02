import React, { Component } from "react";
import { Nav, Navbar, Form, Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class NavBar extends Component{
  render(){
  return (
    <div>
      <div className='bg-gray'>
        <Container>
          <Row>
            <Col className='f4 tl'>I bet that Joe Biden will be the next US Pres.</Col>
            <Col>1/3 odds at 10$</Col>
            <Col>01.01.2020</Col>
          </Row>
        </Container>
      </div>
      <br/>
    </div>
  );
}
}
