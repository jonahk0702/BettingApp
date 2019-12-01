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

  reload = (num) =>{
    this.props.reload(num);
  }


  render(){
    let modalClose = () => {
      this.setState({ modalShow: false });
      this.reload(7);
    }
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>{ (Math.round(parseFloat(this.props.Odds) * 10000) /10000) }</Col>
            <Col xs={2} className='bb bt ma1'>B{this.props.amount}</Col>
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
                  id = {this.props.id}
                  description = {this.props.name}
                  total = {this.props.amount}
                  odds = {this.props.Odds}
                  expiry = {this.props.expiry}
                  email = {this.props.email}
                
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
