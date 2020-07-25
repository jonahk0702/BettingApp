import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from "../navbar/NavbarIn";

class TermsAndConditions extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  changeRoute = (name) => { 
    this.props.changeRoute(name); 

  }

  unloadUser = () => {
  this.props.unloadUser();
}

  render() {
    return (
      <div>
       
        <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
         <br />
        <br />
        <h1 className="tc i f1 font white">Terms Of Use</h1>
        <br />
        

        <Container className='tc f3 solidBR'>

          <div className='f3 pa1 i'>They are not as boring as they sound</div>          
            
       
          <Row>
          <Col className='pa3 ma3 ba'>
          <br/> 
            <h3 className='i pointer'>We need to do these properly</h3>
            <hr/>
            <br/>
            <span className='f4'>
              We need to talk about these.
            </span>

          </Col>
          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>Terms and conditions</h3>
            <hr/>
            <br/>
          </Col>    
          </Row>
        
        </Container>
        <br/>
      </div>
    );
  }
}

export default TermsAndConditions;