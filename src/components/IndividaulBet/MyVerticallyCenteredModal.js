import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import {Modal, Button} from "react-bootstrap";


let holder;
let buttons;
// TO do Make the messge mean something
export default class MyVerticallyCenteredModal extends React.Component {


componentDidMount(){  
  console.log("reremder with " + this.props.mystate.betid)
  console.log(this.props.mystate);
  console.log("my bet id is " + this.props.betid);
  let {bettype} = this.props;

  if(bettype === 'pile'){
    holder = <div>
      Current Bets For: {this.props.betfor}
      <br/>
      Current Bets Against: {this.props.betagainst}
    </div>;

      buttons = <div>
      <Button className='ma2' onClick={this.hideme}>Cancel</Button>
      <Button className='ma2' onClick={this.buyFor}>Bet for!</Button>
      <Button className='ma2' onClick={this.buyAgainst}>Bet Against!</Button>

      </div>;  
    }

  if(bettype === 'match'){
    buttons = <div>
      <Button className='ma2' onClick={this.hideme}>Cancel</Button>
      <Button className='ma2' onClick={this.buy}>Bet Against!</Button>  
    </div>;

  }

  
    
}


//this one is for pile on later.
 buyAgainst = () =>{
    let date = new Date();
    let properDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    
    fetch('http://localhost:3000/betAgainst', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      amount: this.props.total,
      betid: this.props.betid,
      userId: this.props.userid,
      date: properDate,

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
     this.hideme();
    
   });
  }

buyFor = () =>{
    let date = new Date();
    let properDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    console.log("bet id hee is " + this.props.betid);
    fetch('http://localhost:3000/betFor', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      amount: this.props.total,
      betid: this.props.betid,
      userId: this.props.userid,
      date: properDate,

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
     this.props.onHide();
    
   });
  }  
hideme = () => {
     this.props.onHide();
     console.log("hiddne");

}
  buy = () =>{
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
      userId: this.props.userid,
      description: this.props.description,

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
   this.props.closemo();
    
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
        <Modal.Body className='total'>
          <h4 className='tc'>A summary of the bet: </h4>
          <div>
          Bet Description: {this.props.description}
          <br/>
          Amount: B{this.props.total} 
          <br/>
          {holder}
          
          </div>
        </Modal.Body>
        <Modal.Footer> 
        {buttons}
        </Modal.Footer>
      </Modal>
    )
  }
}

//export default MyVerticallyCenteredModal;