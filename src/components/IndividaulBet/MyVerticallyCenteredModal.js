import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";

class MyVerticallyCenteredModal extends React.Component {


  buy = () =>{
    console.log("");
     window.location.href = "/Explore"; 

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
            Bet that XXXX <br/>
            You are betting BXXX with odds of XXX
             Well you ID shoud be {this.props.ID}. The price is {this.props.Price}. The odds are 
             {this.props.Odds}. The Exipiry is {this.props.Expiry}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Cancel</Button>
          <Button onClick={this.buy}>Buy!</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyVerticallyCenteredModal;