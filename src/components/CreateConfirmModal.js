import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Modal, Button} from "react-bootstrap";


class CreateConfirmModal extends Component {
  constructor(props) {
    super();
    this.state = {
      justConfirm: true,
      a:1
    }
  }



  buy = () =>{
     fetch('http://localhost:3000/createBet', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              description: this.props.betdiscription,
              amountfor: this.props.price,
              total: this.props.price,
              expiry: this.props.expiry,
              amountagainst: 0
          })
        })
   .then(response => response.json())
   .then(user => {
    if(user.id){   
      console.log(user.id);
      this.setState({justConfirm:false});
   //   this.changeRoute("Explore");

    }
   })
  }

    
  render() {
    let currentDisplay;
    if(this.state.justConfirm){
        currentDisplay = 
        <div>
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
                You will bet B{this.props.price}. This bet will expire 
                on {this.props.expiry} and the default winner will be {this.props.defualtwinner}.
                
                </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Cancel</Button>
              <Button onClick={this.buy}>Buy!</Button>
            </Modal.Footer>
          </Modal>
          </div>
        }else{
           currentDisplay = 
        <div>
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body className='tc ma3'>
              <h4 className='tc'>Thats exciting! </h4>
              <p>
                Your best is successful. Get excited for {this.props.expiry} 
                 when the bet expires! 
                
                </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Done</Button>
            </Modal.Footer>
          </Modal>
          </div>
        }
    return ( 
      <div>
      {currentDisplay}
      </div>
    )
  }
}

export default CreateConfirmModal;