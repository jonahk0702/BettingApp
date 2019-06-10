import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'

class CreateBet extends Component {
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
     <h1 className="tc white i grow f1 font">Create a bet!</h1>
     <br/><br/>
        <Container>
  			<Row>
 			   <Col className='tc f3 solidBR bg-white'>
 			   Create a Bet! 
         <hr/>

          <Container>
            <Row>
              <Col>We Offer three main types of bets. With proper wording, almost any bet should fit.
              I bet That ______ will happen before [Date] will happen
              I bet That ______ will ______
              I bet that ______ is really actualy ______
              I bet that ______ happened ________


              </Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
            </Row>
          </Container>
          
          <hr/><br/>
          

 			   </Col>
  		
			</Row>
		</Container>
      </div>
    );
  }
}

export default CreateBet;  