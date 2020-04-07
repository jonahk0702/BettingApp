import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

let mods;

export default class ExpiredPileBet extends Component{
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
  modalClose = () => {
    mods = <div></div>;      

      this.setState({ modalShow: false });
    }


modalMade = () => {
  mods = <div>
  <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={this.modalClose}
                  betid = {this.props.betid}
                  description = {this.props.name}
                  total = {this.props.price}
                  expiry = {this.props.expiry}
                  email = {this.props.email}
                  userid = {this.props.userId}
                  bettype = 'pile'
                  betfor = {this.props.currentFor}
                  betagainst = {this.props.currentAgainst}
                  mystate = {this.state}
                  closemo = {this.modalScrew}
                /> 
                </div>;

  this.setState({betid: this.props.betid});
  this.setState({ modalShow: true });
  this.setState({a: 145});
}

  changeRoute = (route) => {
    this.props.changeRoute(route);
  }

  modacall = () => {
    this.modalMade();
    setTimeout(function () {
    this.modalMade();

    }.bind(this), 250);
    this.modalMade();
  }

  render(){
    
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
              <Col xs={2} className='bb bt ma1'>{this.props.currentFor}</Col>
              <Col xs={2} className='bb bt ma1'>{this.props.currentAgainst}</Col>            
              <Col xs={2} className='bb bt ma1'>{ this.props.price }</Col>        
              <Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
            
          <Button 
                  variant="primary"
                  onClick={
                    this.modacall
                   
                  }
                  className='ma1 reds tc w-20 h-20'
                >
                  Me!
                </Button>
                Who Won?
              <Button 
                  variant="primary"
                  onClick={
                    this.modacall
                   
                  }
                  className='ma1 reds tc w-20 h-20'
                >
                  Not Me!
              </Button>

                
              

            </Col>
          </Row>
        </Container>
        {mods}
      </div>
      <br/>
    </div>
  );
}
}
