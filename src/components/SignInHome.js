import React, { Component } from "react";
import {Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";
import BetManager from "./IndividaulBet/BetManager";
import IndividaulBet from "./IndividaulBet/IndividaulBet";


let amount = 0;
let betArray;
let holder; 

class SignInHome extends Component {
  constructor(props) {
    super(); 
    this.state = {
      
    };
  }


  changeRoute = (name) => {
    this.props.changeRoute(name);
  }

  unloadUser = () => {
  this.props.unloadUser();
}

componentDidMount(){
  fetch('http://localhost:3000/displayBet', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    })
   })
   .then(response => response.json())
   .then(data => {
     console.log(data) 
   });

   fetch('http://localhost:3000/returnBets', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
     })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data + " is data");
      
     //  for (var i = 0; i < betArray.length; i++) {
     //    holder += <IndividaulBet name={betArray[i].description}/>
     //  this.setState({a:1});

     // }
    });
   
}


  render() { 
    return (
      <div>
        <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser} />
        <br />
        <br />
        <br />
        <h1 className="tc white i f1 font">Explore Open Bets!</h1>
        <br />
        <br />
        <Container>
          <Row>
            <Col className="tc f3 solidBR">
              How should we order all open Bets?
              <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <ToggleButtonGroup
                  className="center "
                  type="radio"
                  name="options"
                  defaultValue={1}
                >

                  <ToggleButton className="ma3" value={1}>
                    Most Popular
                  </ToggleButton>
                  <ToggleButton className="ma3" value={2}>
                    Highest odds
                  </ToggleButton>
                  <ToggleButton className="ma3" value={3}>
                    Highest Wager
                  </ToggleButton>
                  <ToggleButton className="ma3" value={4}>
                    Lowest Wager
                  </ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar> 

            
              <br />
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
              
              {holder}
              
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    );
  }
}

export default SignInHome;
