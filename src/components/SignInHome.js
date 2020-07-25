import React, { Component } from "react";
import {Button, Container, Row, Col, ButtonToolbar} from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";
import IndividaulBet from "./IndividaulBet/IndividaulBet";
import PileIndiBet from "./IndividaulBet/PileIndiBet";
//import MyVerticallyCenteredModal from './IndividaulBet/MyVerticallyCenteredModal';

 //TO do

 // Alot of descructeering, especcially in the mapping (search for 'map')
// What happends when the bet descrpio is too long? Test it and make a method that displays the first like 20 charactrs when longer
 
let Holder = <div></div>; 
let PilesHold = <div></div>; 
let balance=0;


class SignInHome extends Component {
  constructor(props) {
    super(); 
    this.state = {
      //I know this is messy but hear me out. To reload a page we need a state change.
      //SO if I cannt change a (because it is used for sorting as well as reloads)
      //I will just change B
      a:'total', 
      b:'1' 
      
    };
  }

reload = (num) => {
  this.props.reload(num);
}

  changeRoute = (name) => {
    this.props.changeRoute(name);
  }

  unloadUser = () => {
  this.props.unloadUser();
}

cheap = () => {
  this.makeItEfficieant('total');  
}

goodOdds = () => {
  this.makeItEfficieant('odds');  
}

expires = () => {
  this.makeItEfficieant('expiry');  
}

popular = () => {
  this.makeItEfficieant('popular');
}

makeItEfficieant = (sortBy) => {
  this.getTotal();
  Holder = <div></div>; 
  this.grabbingBets(sortBy);
    
  this.setState({a:sortBy});


}


bought = () => {
  if(this.state.a === 'total'){
    this.makeItEfficieant('total');
  }
  if(this.state.a === 'popular'){
    this.makeItEfficieant('popular');
  }
  if(this.state.a === 'expiry'){
    this.makeItEfficieant('expiry');
  }
  if(this.state.a === 'odds'){
    this.makeItEfficieant('odds');
  }
}

 

componentDidMount(){  
  this.grabbingBetsM('total');
  this.getTotal();
  
  this.getExpiredBets();

}


getTotal = () => {
  fetch('http://localhost:3000/getBalance', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: this.props.userId
    })
   })
   .then(response => response.json())
   .then(data => {
     balance = data;
     this.setState({b:'5'});
   });

}


grabbingBetsM = () => {

  //I dont think I ever use display bets endpoint
 
   fetch('http://localhost:3000/returnBets', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      userId: this.props.userId 
     })
    })  
    .then(response => response.json())
    .then(data => {
       Holder = data.map((user, i) => { 
          return <IndividaulBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].total}
                  expiry={data[i].expires} userId={this.props.userId} price={data[i].amount} email={this.props.email}     />

        })


       if(this.state.b === '1'){
        this.setState({b:'2'});
       }else{
        this.setState({b: '1'});
       }
    });
    } 
grabbingBetsP = () => {
      fetch('http://localhost:3000/returnPileBets', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({ 
      userId: this.props.userId 
     })
    }) 
    .then(response => response.json())
    .then(data => {
      console.log(data);
       Holder = data.map((user, i) => { 
          return <PileIndiBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].total}
                  expiry={data[i].expires} currentFor={data[i].currentfor} currentAgainst={data[i].currentagainst}
                  userId={this.props.userId} price={data[i].minimum} email={this.props.email} haveB='no' moveUp={this.moveUp}   />

        })

       if(this.state.b === '1'){
        this.setState({b:'2'});
       }else{
        this.setState({b: '1'});
       }
    });


} 

moveUp = (a,des) => {
  if(a){
  console.log(des);
}}
createPileEntry = (data) => {
  fetch('http://localhost:3000/createEntry', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      data:data
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
   
  })
}
getExpiredBets = () => {
  fetch('http://localhost:3000/expireBets', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log(data);
    console.log(data.length);
    if(data.length>0){ 
      this.createPileEntry(data);
    }
 //   console.log("Prev is the resp");
   })
 } 

swapExpireds = (data) => {
  fetch('http://localhost:3000/swapExpireds', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      bets: data
    })
   })
   .then(response => response.json())
   .then(data => {
 //    console.log(data);
   });

}
  render() {  
    return (
      <div>
        <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser} userId={this.props.userId} />
        <br />
        <br />
        <br />
        <h1 className="tc white i f1 font">Explore Open Bets!</h1>
        <br />
        <br />
        <Container>
          <Row>
              <Col className="tc f3 solidBR">
              <span className=''>
                <br/>    
                Your balance is: {balance}
                <hr/> 
              </span> 
            
                <br/>
              <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa2 ma3 ph5-ns">

                <Button variant="outline-info" className='center' onClick={this.grabbingBetsM}>One-on-One</Button>{' '}
                 
                <Button variant="outline-danger" className='center' onClick={this.grabbingBetsP}>Pile-ons</Button>{' '}
              </ButtonToolbar> 

            
              <hr />
              <br/> 
              <div className='tc'>
                <Container>
                  <Row>
                    <Col md className='f4 tc bl ma1'>A short descripton of bet</Col>
                    <Col xs={2} className='ma1'>The Odds</Col>
                    <Col xs={2} className=' ma1'>Amount (in B)</Col>
                    <Col xs={2} className='br ma1'>End date</Col>
                  </Row>   
                </Container>
              </div>
              <hr/>
              
              {Holder} 
              {PilesHold}
              
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    );
  }
}

export default SignInHome;