import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SignIn/SignIn.css";
import "./pages.css";
import NavBar from "./navbar/NavBar";
import space from './space.jpg';
import cover from './cover.PNG';
import w from './w.jpeg';
import two from './two.PNG';
import three from './three.PNG';
import four from './four.PNG';
import five from './five.PNG'; 
import sixs from './sixs.PNG'; 
import seven from './seven.PNG';
import sevens from './sevens.PNG';
import eight from './eight.PNG';
import nine from './nine.PNG';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

changeRoute = (newRoute) => {
  this.props.changeRoute(newRoute);
}
loadUser = (data) =>{
  this.props.loadUser(data);
}

  render() {
    return (
      <div>
        <NavBar changeRoute={this.changeRoute} />
       
        <div className="tc">
          <br />
          <br />
          <br />
          <h1 className="tc white i f1 font">Our presentation </h1>
          <br />
          <br />
          <Container>
            <Row>
           
              <Col className="tc f3 solidBR">
                  Slide 1: Introduction
               <hr />
                <div className="tl f3 i">
                
             
    
              
              <br/>
                <Row>
                 

                  <Col className= 'tc f3 solidBR'>
                    <img src={cover} alt="yes" />
                  
                  </Col>
                </Row>
                <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 2: Overview
                  <hr/>
                    <img src={two} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 3: Orbitals
                  <hr/>
                    <img src={three} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 4: Orbitals
                  <hr/>
                    <img src={four} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 5: Rocket Equation
                  <hr/>
                    <img src={sixs} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 6: Rocket Equation
                  <hr/>
                    <img src={five} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 7: Space Facts
                  <hr/>
                    <img src={sevens} alt="yes" />
                  </Col>

                  
                </Row>
                <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 8: Space Facts
                  <hr/>
                    <img src={seven} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 9: ending
                  <hr/>
                    <img src={eight} alt="yes" />
                  </Col>

                  
                </Row>
                 <br/>
                <br/>
                <Row>


              

                  <Col className= 'tc f3 solidBR'>
                  Slide 10: Credits
                  <hr/>
                    <img src={nine} alt="yes" />
                  </Col>

                  
                </Row>
      
              <br/>
                       
                </div>
              </Col>
              </Row>

              <br/>
              <br/>
              <br/>
              <br/>

              

          </Container>
          <br/>
          <br/>
        </div>
        </div>
    );
  }
}

export default Home;
