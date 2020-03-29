import React, { Component } from "react";
import { Col, Row, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";

export default class NavBar extends Component{
constructor(props) {
    super();
    this.state = {
      id: 111111, 
      Price: 0,
      Odds: "",
      Expiry:"",
      BetDiscription:"XXX",
      modalShow: false,

    };
  }



  changeRoute = (route) => {
    this.props.changeRoute(route);
  }


  render(){
   
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>{this.props.side}</Col>
            <Col xs={2} className='bb bt ma1'>{ this.props.price }</Col>
            
            <Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
            
              

            </Col>
          </Row>
        </Container>

      </div>
      <br/>
    </div>
  );
}
}
