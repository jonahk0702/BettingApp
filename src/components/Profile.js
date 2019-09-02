import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";

class Profile extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
       {/* <NavbarIn />
 */}        <br />
        <br />
        <h1 className="tc i f1 font">A complete guide to Sevens!</h1>
        <br />
        

        <Container className='tc f3 bg-grey'>

          <Row>
            
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>How does the game actualy work?</h3>
            <hr/>
            <br/>
            <h4 className='pointer'>It is a simple maths game
            where one uses their memery and fast mutiplication in order to count as high as possible 
            but their is a twist. In the begining you will be asked to choose a number from 3 - 9. When 
            counting you will not be allowed to mention this number or any number that contains this number. 
            </h4> 
            
          </Col>       

            <Col className='pa4 ma5 ba'>
            <h3 className='i'>How to improve my score?</h3>
            <hr/>
            <br/>
            <h4 className='pointer'>One of the best ways to improve your
            score is to use numbers you are more familiar with. As an eight is given
            as much weight as a seven, lower number can often five you higher scores. In the
            end the best way to win is to preactise the hardest.
            </h4> 
          </Col>
          </Row>
              
          <Row>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>How does ranking work?</h3>
            <hr/>
            <br/>
            <h4 className='pointer'>Ranking works complty off your high score. It is merely an ordered list
            of the users with the highest high scores. Look above about how to get your score higher. 
            </h4>  
            
          </Col>
          <Col className='pa4 ma5 ba'>
            <h3 className='i'>Terms and conditions</h3>
            <hr/>
            <br/>
            <h4 className='pointer'>Whenever a user creates an account they have to agree to our 
            terms and conditions. This basically cover us incase our game is too fun and the user
            gets cannot play another game. Or if our game makes the user too smart for their own good. 
            Also they have to take pity on an idea that would have been a really cool month long project, 
            done in a fraction of the time needed. 

            </h4> 
          </Col>    
          </Row>
        
        </Container>
        <br/>
      </div>
    );
  }
}

export default Profile;
