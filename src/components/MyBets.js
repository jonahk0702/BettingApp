import React, { Component } from "react";
import {Button, Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
//import MyIndividaulBet from './IndividaulBet/MyIndividaulBet';
import IndividaulBet from './IndividaulBet/IndividaulBet';
import ExpiredIndiBet from './IndividaulBet/expiredIndiBet';
import PileIndiBet from './IndividaulBet/PileIndiBet';
import ExpiredPileBet from './IndividaulBet/ExpiredPileBet';


//HolderM is for mathed. P is for Pile
let blueActive = <div></div>;
let blueExpired = <div></div>;
let bluePending = <div></div>;
let blueVoted = <div></div>;

let redActive = <div></div>;
let redExpired = <div></div>;
let redPending = <div></div>;
let redVoted = <div></div>;

let blue = true;

let final = <div></div>;


class MyBets extends Component {
  constructor(props) {
    super();
    this.state = { 
      tab:"active"
    };
  }


  changeRoute = (name) =>{ 
    this.props.changeRoute(name); 
  }



  unloadUser = () => {
    this.props.unloadUser();
  }


  componentDidMount() {
    this.getAllBets()

  }

  getAllBets = () => {

   fetch('http://localhost:3000/getMyBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: 'expiredmatched'
    })
    })
   .then(response => response.json())
   .then(data => {
    for (var i = 0; i < data.length; i++) {
      if(data[i].better){
        if(data[i].better === this.props.userId){
          data[i].side = "for";
        }else{
          data[i].side = "against";
        } 
      }
    }

    blueExpired = data.map((user, i) => { 
     return <ExpiredIndiBet key={i} betid={data[i].betid} name={data[i].description} 
     expiry={data[i].expires} creator={data[i].creator} amount={data[i].amount}  
     side={data[i].side}  better={this.props.better}  userId={this.props.userId}/>

   })

    this.setState({a:1254});


  });
 

 if(1 === 1){
  fetch('http://localhost:3000/getMyBetOffers', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: "matchingoffers" 
    })
  })
  .then(response => response.json())
  .then(data => {


   bluePending = data.map((user, i) => { 
     return <IndividaulBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].amount}
     expiry={data[i].expires} creator={data[i].creator} price={data[i].amount} 
     side='for'  better={data[i].better}  userId={this.props.userId}/>

   })
 });
}

if(true){
  fetch('http://localhost:3000/getMyBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: 'matchedbets',
      expiredBets: 'false'
    })
  })
  .then(response => response.json())
  .then(data => {

    if(data.length > 0){    
      for (var i = 0; i < data.length; i++) {
        if(data[i].better){
          if(data[i].better === this.props.userId){
            data[i].side = "for";
          }else{
            data[i].side = "against";
          } 
        }
      }

      blueActive = data.map((user, i) => { 
       return <IndividaulBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].total}
       expiry={data[i].expires} userId={this.props.creator} price={data[i].amount} email={this.props.email} 
       side={data[i].side}    />

     })
    }

    this.setState({a:1254});


  });
}

  if(1 === 2){
    fetch('http://localhost:3000/getMyBetVotes', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: this.props.userId,
        database: "matchingoffers" 
      })
    })
    .then(response => response.json())
    .then(data => {


     blueVoted = data.map((user, i) => { 
       return <IndividaulBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].amount}
       expiry={data[i].expires} creator={data[i].creator} price={data[i].amount} 
       side='for'  better={data[i].better}  userId={this.props.userId}/>

     })

     this.setState({a:1254});

     
   });
  }


  fetch('http://localhost:3000/getPileBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: "matchingoffers" ,
      setting: 'untaken'
    })
  })
   .then(response => response.json())
   .then(data => {
    
    redPending = data.map((user, i) => { 
     return <PileIndiBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].amount}
     expiry={data[i].expires} creator={data[i].creator} haveB='true' 
     userId={this.props.userId} currentFor={data[i].currentfor} currentAgainst={data[i].currentagainst}/>

   })

    this.setState({a:1254});


  });

fetch('http://localhost:3000/getPileBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: 'expiredmatched',
      setting: 'dones'
    })
  })
  .then(response => response.json())
  .then(data => {

   redExpired = data.map((user, i) => { 
     return <ExpiredPileBet key={i} betid={data[i].betid} name={data[i].description} 
     expiry={data[i].expires} creator={data[i].creator} amount={data[i].amount}  
     side={data[i].side}  better={this.props.better}  userId={this.props.userId}
     chosen={this.chosen}/>

   })

   this.setState({a:1254});


 });


  
  fetch('http://localhost:3000/getPileBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: 'pilestransactions',
      setting: 'starts'
    })
  })
  .then(response => response.json())
  .then(data => {

    if(data.length > 0){    
      for (var i = 0; i < data.length; i++) {
        if(data[i].better){
          if(data[i].better === this.props.userId){
            data[i].side = "for";
          }else{
            data[i].side = "against";
          } 
        }
      }

      redActive = data.map((user, i) => { 
       return <PileIndiBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].total}
       expiry={data[i].expires} userId={this.props.creator} price={data[i].amount} currentFor={data[i].currentfor}  
       side={data[i].side}  currentAgainst={data[i].currentagainst} haveB='nope' />

     })
    }

    this.setState({a:1254});


  });
if(1 === 2){
   fetch('http://localhost:3000/getPileVotes', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId,
      database: "matchingoffers" ,
      setting: 'untaken'
    })
  })
   .then(response => response.json())
   .then(data => {

    
    redVoted = data.map((user, i) => { 
     return <PileIndiBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].amount}
     expiry={data[i].expires} creator={data[i].creator} haveB='true' 
     userId={this.props.userId} currentFor={data[i].currentfor} currentAgainst={data[i].currentagainst}/>

   })

    this.setState({a:1254});


  });

 }

}

expiredBets = () => {
  
  this.setState({tab:'expired'});
}


chosen=()=>{
  final = <div>Noting</div>
  this.setState({jo:45}) 
  this.getAllBets()
  this.setState({jona:4565}) 
}

untaken = () => {

  this.setState({tab:'untaken'});
}

activeBets = () =>{
  this.setState({tab:'active'});
}

voted = () => {

  this.setState({tab:'voted'});
   //this is quite cool
   //I need to find all his transations, then find all the ones where the other side is 0 
}

grabbingBetsM = () => {
  blue = true;
  this.setState({a:4});
}

grabbingBetsP = () => {
  blue = false;
  this.setState({a:13});
 
}

 render() {

  if(blue){
    if(this.state.tab === 'active'){
      final = blueActive;
    }
    if(this.state.tab === 'expired'){
      final = blueExpired;
    }
    if(this.state.tab === 'voted'){
      final = blueVoted;
    }
    if(this.state.tab === 'untaken'){
      final = bluePending;
    }
  }else{
    if(this.state.tab === 'active'){
      final = redActive;
    }
    if(this.state.tab === 'expired'){
      final = redExpired;
    }
    if(this.state.tab === 'voted'){
      final = redVoted;
    }
    if(this.state.tab === 'untaken'){
      final = redPending;
    }
  }

  return (
   <div>
   <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser} userId={this.props.userId}/>
   <br/><br/><br/>
   <h1 className="tc white i f1 font">My Bets!</h1>
   <br/><br/>
   <Container>
   <Row>
   <Col className='tc f3 solidBR bg-white'>



   <hr/><br/>

   <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa2 ma3 ph5-ns">

   <ToggleButtonGroup
   className="center "
   type="radio"
   name="options"
   defaultValue={1}
   >

   <ToggleButton className="ma2" size='lg' value={1} onClick={this.activeBets}>
   Active Bets
   </ToggleButton>
   <ToggleButton className="ma2" size='lg' value={2} onClick={this.expiredBets}>
   Expired
   </ToggleButton>
   <ToggleButton className="ma2" size='lg' value={3} onClick={this.untaken}>
   Pending
   </ToggleButton>
   <ToggleButton className="ma2" size='lg' value={3} onClick={this.voted}>
   Voted On
   </ToggleButton>
   </ToggleButtonGroup>
   </ButtonToolbar> 
   <ButtonToolbar className="center mw5 mw7-ns center  pa2 ma3 ph5-ns">


   </ButtonToolbar>
   <br/>
   <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa2 ma3 ph5-ns">

   <Button variant="outline-info" className='center' onClick={this.grabbingBetsM}>One-on-One</Button>{' '}

   <Button variant="outline-danger" className='center' onClick={this.grabbingBetsP}>Pile-ons</Button>{' '}
   </ButtonToolbar> 

   <br/>
   <hr/>
   <br/>

   {final}
   
   </Col>

   </Row>
   </Container>
   <br/>
   </div>
   );
}
}

export default MyBets;  