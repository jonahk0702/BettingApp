import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./navbar/NavBar";
import "./pages.css";
class HowThisWorks extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  changeRoute = (newRoute) => {
  this.props.changeRoute(newRoute);
}

  render() {
    return (
      <div>
        <NavBar changeRoute={this.changeRoute}/>
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
                <div className=" f4">
                  Okay, Custom Bets is a betting service that facilitates any type of bet.
                  We do this not by simply oppsing any bet but by matching people who have different
                  opinions on a particualr topic.  <hr />
                 </div>
              </Col>
            </Row>
            <h3 className='pa3 i f2'>More info And FAQs</h3>
          <Row>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Who Decides The Winner?</h3>
            <hr/>
            <br/>
            <p>
            Currently, a form of honour system has been used. When the bet expires, both
            sides, or every person who has taken the bet (depending on bet type) are asked
            who won. The money is distributed to the sides with most votes. 
             </p>  
            
          </Col>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>How do our odds work? </h3>
            <hr/>
            <br/>
            <p>
            On the simple matching bets between two people, the winner simply takes all.
            On the Pile-Ons all money bet is totaled up and distributed amongst all
            those who took the side of the bet that won.

             </p> 
          </Col>    
          </Row>
          <Row>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Regulation</h3>
            <hr/>
            <br/>
            <p>
              Nothing Yet. Watch this space.
            </p>  
            
          </Col>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Blank</h3>
            <hr/>
            <br/>
            <p>
            Nothing Yet. Watch this space.
            </p> 
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
