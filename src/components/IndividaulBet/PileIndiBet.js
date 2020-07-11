import React, { Component } from "react";
import {Modal, Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

let mods;
let show;
 
let bHolds;
 

//Local varibles 
//Key inside


export default class PileIndiBet extends Component{
constructor(props) {
    super();
    this.state = {
      id: 111111, 
      Price: 0,
      description:"",
      Expiry:"",
      BetDiscription:"XXX",
      modalShow: false,
      p:false
      
    };
  }
  modalClose = () => {
    mods = <div></div>;      

      this.setState({ modalShow: false });
    }
handleShow = () => {
    show = true;
    this.setState({a:4})
  }
handleClose = () => {
    show = false;
    this.setState({a:4})
  }

  clicked = () => {
    this.modacall();
  }

moveUp = () => {

  this.props.moveUp(this.state.p, this.state.description);
}


componentDidMount(){ 
  this.setState({description:this.props.name})
    bHolds = <div>
    </div>

  this.setState({b:299});
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
    console.log()
    //this.modalMade();
    setTimeout(function () {
    this.modalMade();

    }.bind(this), 250);
    this.modalMade();
  }

  render(){
    
  return (
    

    <div >


    

      <div className='bl br tc red' >
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1' onClick={this.clicked}>{this.props.name}</Col>
              <Col xs={2} className='bb bt ma1' onClick={this.clicked}>{this.props.currentFor}</Col>
              <Col xs={2} className='bb bt ma1' onClick={this.clicked}>{this.props.currentAgainst}</Col>            
              <Col xs={2} className='bb bt ma1'>{ this.props.price }</Col>        
              <Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
            
                {bHolds}

                
              

            </Col>
          </Row>
        </Container>
        {mods}
      </div>
      <br/>

      <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.description}<br/>{this.props.increm}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
}
