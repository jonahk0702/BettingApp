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

    };
  }

notMe = () => {
  this.submit('be');
}
meWon = () => {
  
  this.submit('cr');
}
submit = (winner) => {
  console.log(this.props.betid);
    let date = new Date(); 
    let properDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
     fetch('http://localhost:3000/pileVote', {
    method: 'post', 
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userid: this.props.userId,
      id: this.props.betid,
      vote: winner,
      side: this.props.side,
      amount: this.props.amount,
      exDate: properDate,
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data.substring(0, 1));
    if(data.substring(0, 1) === 'O'){
      this.distibutePiles(data);

    }
    })
} 


  changeRoute = (route) => { 
    this.props.changeRoute(route);
  }


distibutePiles = (data) => { 
  console.log("on the move");
  fetch('http://localhost:3000/disPiles', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
     data:data
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
   });  
}



  render(){
    
  return (
    

    <div >

      <div className='bl br tc red' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
              <Col xs={2} className='bb bt ma1'>{this.props.currentFor}</Col>
              <Col xs={2} className='bb bt ma1'>{this.props.currentAgainst}</Col>            
             {// <Col xs={2} className='bb bt ma1'>{ this.props.price }</Col>        
              }<Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
            
          <Button 
                  variant="primary"
                  onClick={
                    this.meWon
                   
                  }
                  className='ma1 reds tc w-20 h-20'
                >
                  Me!
                </Button>
                Who Won?
              <Button 
                  variant="primary"
                  onClick={
                    this.notMe
                   
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
