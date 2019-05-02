import React, { Component } from "react";
import { Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
import IndividaulBet from './IndividaulBet/IndividaulBet';
class SignInHome extends Component {
  constructor(props) {
    super();
    this.state = { 
    

  };
}

  render() {
    return (
     <div>
     <NavbarIn/>
     <br/><br/><br/>
     <h1 className="tc white i grow f1 font">Explore Open Bets!</h1>
     <br/><br/>
        <Container>
  			<Row>
 			   <Col className='tc f3 solidBR '>
 			   Hw shall we order all open Bets? 

         <ButtonToolbar className='center mw5 mw7-ns center bg-light-gray pa3 ph5-ns'>
            <ToggleButtonGroup className='center ' type="radio" name="options" defaultValue={1}>
                <ToggleButton className='ma3' value={1}>Most Popular</ToggleButton>
                <ToggleButton className='ma3' value={2}>Highest odds</ToggleButton>
                <ToggleButton className='ma3' value={3}>Highest Wager</ToggleButton>
                <ToggleButton className='ma3' value={4}>Lowest Wager</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
          <hr/><br/>
          <IndividaulBet/>

 			   </Col>
  		
			</Row>
		</Container>
      </div>
    );
  }
}

export default SignInHome;  