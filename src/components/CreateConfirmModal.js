import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";

class CreateConfirmModal extends React.Component {


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
        <Modal.Body className='tc ma3'>
          <h4 className='tc'>Are you sure you want to create and take the bet: </h4>
          <p>
            Are you sure you want to bet {this.props.betdiscription}.
            You will bet B{this.props.price}, at the odds of {this.props.odds}.
            This bet will expire on {this.props.expiry} and the default winner will be {this.props.defualtwinner}.
            
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

export default CreateConfirmModal;