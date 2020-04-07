import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


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
    let modalClose = () => {
      this.setState({ modalShow: false });
        
    }
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>-</Col>
            <Col xs={2} className='bb bt ma1'>{ this.props.price }</Col>
            
            <Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
            
                <Button 
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}
                  className='ma1 reds tc w-20 h-20'
                >
                  Take Bet!
                </Button>

                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  betid = {this.props.betid}
                  description = {this.props.name}
                  total = {this.props.price}
                  expiry = {this.props.expiry}
                  email = {this.props.email}
                  userid = {this.props.userId}
                  bettype = 'match'
                /> 
              

            </Col>
          </Row>
        </Container>

      </div>
      <br/>
    </div>
  );
}
}
