import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Modal, Button} from "react-bootstrap";


// To do

//Destructor all the this.props...
//Make this message meaningful, it is bearly readable. 

let betId = "";
class CreateConfirmModal extends Component {
  constructor(props) {
    super();
    this.state = {
      justConfirm: true,
      userId: '',  
      a:1
    }
  }


 componentDidMount(){
  this.setState({usersId: this.props.userid});
  console.log(this.props.userid);
}


createId = () => {
    let id = "";
    for(let a = 0; a < 6; a++){
      id += this.generate();
    }

  //  this.setState({userid: id});

     fetch('http://localhost:3000/checkId', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              id: id,
              table: 'bets'
          })
        })
         .then(response => response.json())
         .then(user => {
            if(user !== 'Good'){
                this.redo();
            }else{
              betId = id;
              console.log("Good idea of " + id)
              this.buy();
            }
         })

  }

  redo = () => {
    this.createId();
  }
     

generate = () => {
   const first = Math.round(Math.random() * 64);
   let a;
   if(first < 10){
      a = String.fromCharCode(first + 48);
   }
   if(first > 9 && first < 38){
      a = String.fromCharCode(first + 53);
   }
   if(first > 37 && first < 64){
      a = String.fromCharCode(first + 59);
   }
   return a;
  }

  buy = () =>{
    let date = new Date();
    let properDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    console.log(new Date());
     fetch('http://localhost:3000/createBet', {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              description: this.props.betdiscription,
              total: this.props.price,
              expiry: this.props.expiry,
              userid: this.props.userid,
              email: this.props.email,
              id:betId,
              exDate: properDate,
              bettype:this.props.bettype,
              hour: this.props.hour
          })
        })
   .then(response => response.json())
   .then(user => {
    console.log(user);
    if(user === "Success"){   
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
                Is this bet friendly? Well it is {this.props.isfriendly}.
                ALso the bet type is {this.props.bettype}
                </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Cancel</Button>
              <Button onClick={this.createId}>Buy!</Button>
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