import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";
let myId = "";

// TO do Make the messge mean something
class MyVerticallyCenteredModal extends React.Component {


componentDidMount(){  

  this.getUserId();
}


getUserId = () => {
  fetch('http://localhost:3000/getId', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: this.props.email
    })
   })
   .then(response => response.json())
   .then(data => {
    myId = data;
   }); 

}
//this one is for pile on later.
 // buyAgainst = (price) =>{
 //    fetch('http://localhost:3000/betAgainst', {
 //    method: 'post',
 //    headers: {'Content-Type': 'application/json'},
 //    body: JSON.stringify({
 //      email: this.props.email,
 //      amount: this.props.total,
 //      price: price,
 //      betid: this.props.betid,
 //      userId: this.props.userid
 //    })
 //   })
 //   .then(response => response.json())
 //   .then(data => {
 //    console.log(data);
 //     this.props.onHide();
    
 //   });
 //  }

  buyFor = () =>{
    console.log("request sent");
    console.log("I run");
    fetch('http://localhost:3000/buyMatch', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      betid: this.props.betid,
      email: this.props.email,
      amount: this.props.total,
      expiry: this.props.expiry,
      userId: myId,
      description: this.props.description,

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
          my ID is {this.props.betid}
            Bet B{this.props.total} <br/>
            You are user ID {this.props.email}
            You are betting {this.props.description} with odds of {this.props.odds}
             Well you ID shoud be {this.props.id}. The price is {this.props.total}. The odds are 
             {this.props.Odds}. The Exipiry is {this.props.expiry}
          </p>
        </Modal.Body>
        <Modal.Footer> 

          <Button onClick={this.props.onHide}>Cancel</Button>
          <Button onClick={this.buyFor}>Bet for!</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyVerticallyCenteredModal;