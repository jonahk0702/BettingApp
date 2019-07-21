import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";
import IndividaulBet from "./IndividaulBet/IndividaulBet";

class MoreInfo extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() { 
    return (
      <div>
        <NavbarIn />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col className="tc f3 solidBR">
              Lets see...
             
            
              <br />
              <hr />
              <br/> 
              <div className='tc'>
                <Container>
                  <Row>
                    <Col className='f4 tc bl ma1 v-mid'>Well actually, what is the bet?</Col>
                    <Col className='f4 tc bl ma1'>A short descripton of bet. Can be a few Lines. Maybe
                    it is even better if its a but longer</Col>
                   </Row>
                   <br/>
                   <br/>
                   <Row> 
                    <Col className='ma1'>The Odds</Col>
                    <Col className='ma1 tc'>The odds for this bet are: <br/>X:X <br/>
                    If (Like most of us) you aren't sure exactly sure how the odds word,  
                      <a href="/"> click here</a> and we'll explain 

                      </Col>
                  </Row>
                  <br/><br/>
                  <Row>

                    <Col xs={2} className=' ma1'>Amount (in B)</Col>
                    <Col xs={2} className='br ma1'>End date</Col>
                  </Row>   
                </Container>
              </div>
              <hr/>
              
              <IndividaulBet name={"I bet that Ramaposa is an Alien"} />
              <IndividaulBet name={"I bet the Mac Miller faked his death"} />
              <IndividaulBet name={"I bet that Micheal Obama is "} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MoreInfo;
