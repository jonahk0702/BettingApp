import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  changeRoute = (name) => {
    this.props.changeRoute(name);
  }

  render() {
    return (
      <div>
       
        <NavbarIn changeRoute={this.changeRoute}/>
         <br />
        <br />
        <h1 className="tc i f1 font white">Your Profile</h1>
        <br />
        

        <Container className='tc f3 solidBR'>

          <Row>
            
          <Col className='pa4 ma5 ba'>
          <br/>
            <h3 className='i pointer'>Profile Settings</h3>
            <hr/>
            <br/> 
          </Col>       

            <Col className='pa4 ma5 ba'>
            <br/>
            <h3 className='i pointer'>Account stats</h3>
            <hr/>
            
          </Col>
          </Row>
              
          <Row>
          <Col className='pa4 ma5 ba'>
          <br/>
            <h3 className='i pointer'>How does __ really work?</h3>
            <hr/>
            <br/>
                        
          </Col>
          <Col className='pa4 ma5 ba'>
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

export default Profile;
