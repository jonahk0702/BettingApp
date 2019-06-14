import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";

class MyVerticallyCenteredModal extends React.Component {
  buy = () =>{

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
        <Modal.Body clasName='tc'>
          <h4 clasName='tc'>You are about to: </h4>
          <p>
            Bet that XXXX <br/>
            You are betting BXXX with odds of XXX
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Cancel</Button>
          <Button onClick={this.props.buy}>Buy!</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MyVerticallyCenteredModal;