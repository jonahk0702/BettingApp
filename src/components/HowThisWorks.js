import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./navbar/NavBar";
import "./pages.css";
class HowThisWorks extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="tc">
          <br />
          <br />
          <br />
          <h1 className="tc white i f1 font">
            Wait, so how does this really work?
          </h1>
          <br />
          <br />
          <Container className="tc f3 solidBR">
            <Row>
              <Col>
                <h3 className='pa3 i f2'>Wait, so what are we really?  </h3>
                <hr />
                <p className=" f4">
                  Okay, Costume bets is a betting service that facilitates any type of bet.
                  We do this not by simply oppsing any bet but by matching people who have different
                  opinions on a particualr topic.  <hr />
                 </p>
              </Col>
            </Row>
            <h3 className='pa3 i f2'>More info And FAQs</h3>
          <Row>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Who Decides The Winner?</h3>
            <hr/>
            <br/>
            <p>We use a three person system, where any two out of the
            folowing are needed to end the bet and authorize the payout. It can be the person
             on the postive side if the bet, the person on the negetive side or our adminsistartion.</p>  
            
          </Col>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>How do our odds work? </h3>
            <hr/>
            <br/>
            <p>Whoever creates the bet will decide the odds associated with
            specific bet. All odds are phrases Number:Number ie 1:2. The numbers indicate the 
            ratio of the amount each side will put forward. The bet winner wins the entire sum. </p> 
          </Col>    
          </Row>
          <Row>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Regulation</h3>
            <hr/>
            <br/>
            <p>
              We prefer to keep our intervention to a minimum, and thus do not regulate odds or 
              amounts per bet. However if we feel a bet is offensive we will intervin. We will also
              answer all queries of the winner. If there is a clear winner we'll award the bet to 
              that side. However if it is unclear, bot sides will be refunded.
            </p>  
            
          </Col>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Blank</h3>
            <hr/>
            <br/>
            <p>Lorem  Ipsum </p> 
          </Col>    
          </Row>
          </Container>
        </div>
        <br/>
      </div>
    );
  }
}

export default HowThisWorks;
