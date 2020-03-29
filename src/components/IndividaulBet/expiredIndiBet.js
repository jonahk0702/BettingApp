import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";


let side = "";
let winner = "";

export default class NavBar extends Component{
constructor(props) {
    super();
    this.state = {
      id: 111111, 
      Price: 0,
      Odds: "",
      Expiry:"",
      BetDiscription:"XXX",
      modalShow: false,

    };
  }



  changeRoute = (route) => {
    this.props.changeRoute(route);
  }

  lose = () =>{
    this.choose("lose");
  }

  win = () => {
    this.choose('win');
  }

  choose = (outcome) =>{
    
    side = ""; 
    winner = "";
    if(this.props.userId === this.props.creator){
      console.log("I am the creator");
      side = "creator";
      if(outcome === 'lose'){
        winner = 'be';
      }else{
        winner = 'cr';
      }
    }else{
      console.log(this.props.userId + " my ID");
      console.log(this.props.creator + " - creatorid")
      side = "better";
      if(outcome === 'lose'){
        winner = 'cr';
      }else{
        winner = 'be';
      }
    }
    fetch('http://localhost:3000/chooseMatchWin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      betid: this.props.betid,
      userId: this.props.userId

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data)
    if(data == null){
      this.firstSide();            
    }else{
      this.secondSide();
    }
    

  })
 }

firstSide = () =>{
  console.log("side: " + this.props.side)
    fetch('http://localhost:3000/chooseMatchWinp2', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      creator: this.props.creator,
      better: this.props.better,
      amount: this.props.amount,
      betid: this.props.betid,
      side:side,
      sideWon:winner

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data)
  
    

  })


}

secondSide = () => {
  console.log("So i Start");
   fetch('http://localhost:3000/chooseMatchWinTaken', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      creator: this.props.creator,
      better: this.props.better,
      amount: this.props.amount,
      betid: this.props.betid,
      side:side,
      sideWon:winner

    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data)

  })

   this.setState({b:110});



  //I need to get the bet, insert the other side. The see if they match! If they do, pay out
  // if they do not match, also pay out

}


  render(){
   
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>-</Col>
            <Col xs={2} className='bb bt ma1'>{ this.props.amount }</Col>
            
            <Col xs={2} className='bb bt ma1'>{this.props.expiry}</Col>
          </Row>
          <hr/> 
          <Row className='tc'>
            <Col className='xl'>
            
                <Button 
                  variant="primary"
                  onClick={this.lose}
                  className='ma1 reds tc w-20 h-20'
                >
                  Not Me
                </Button>
                Who Won?
                <Button 
                  variant="primary"
                  onClick={this.win}
                  className='ma1 reds tc w-20 h-20'
                >
                  Me
                </Button>
                 
              

            </Col>
          </Row>
        </Container>

      </div>
      <br/>
    </div>
  );
}
}
