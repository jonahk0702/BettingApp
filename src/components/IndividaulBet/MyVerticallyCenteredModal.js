import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";

class MyVerticallyCenteredModal extends React.Component {


 buyAgainst = () =>{
    fetch('http://localhost:3000/betAgainst', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      //Need a bet ID and a User ID
      email: this.props.email,
      price: this.props.total,
      betid: this.props.id,

      userId: this.props.userid

    })
   })
   .then(response => response.json())
   .then(data => {
     this.props.onHide();
    
   });
    }

    reload = (num) => {
   //   this.props.reload(num);
    }

    buyFor = () =>{
    fetch('http://localhost:3000/betFor', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      //Need a bet ID and a User ID
      email: this.props.email,
      price: this.props.total,
      betid: this.props.betid,
      userId: this.props.userid
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
     this.props.onHide();
    
   });
    }

    changeRoute =(route) => {
      this.props.changeRoute(route); 
    }
    
  render() {


    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='tc'>
          <h4 className='tc'>You are about to: </h4>
          <p>
          my ID is {this.props.id}
            Bet B{this.props.total} <br/>
            You are user ID {this.props.email}
            You are betting {this.props.description} with odds of {this.props.odds}
             Well you ID shoud be {this.props.id}. The price is {this.props.total}. The odds are 
             {this.props.Odds}. The Exipiry is {this.props.expiry}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.buyAgainst}>Bet against!</Button>
          <Button onClick={this.props.onHide}>Cancel</Button>
          <Button onClick={this.buyFor}>Bet for!</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyVerticallyCenteredModal;