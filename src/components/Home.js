import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "./SignIn/SignIn";
import "./SignIn/SignIn.css";
import "./pages.css";
import NavBar from "./navbar/NavBar";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

changeRoute = (newRoute) => {
  this.props.changeRoute(newRoute);
}

componentDidMount(){  
  
    fetch('http://localhost:3000/getVisit', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    })
   })
   .then(response => response.json())
   .then(data => {

   });
 
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
          <h1 className="tc white i f1 font">Welcome to Custome Bets</h1>
          <br />
          <br />
          <Container>
            <Row>
              <Col className="tc f3 solidBR">
                What is Custom bets? 
                <hr />
                <div className="tl f3">
                  Custom Bets is an online (mock) casino where the bets,
                  odds and time period depends fully on the users. Users can 
                  bet on absolutely anything and they create the bets.
                  All available bets are displayed for anybody to see and take.
                  Bets can either be made one against one, simply matching two people,
                  or Pile-Ons meaning any number of people can take either side
                  and the winnings are distributed amonst the side that won. 
                  The amount bet is also set by the bet creator.

                  <hr/>
                                    Just BTWs, this is not gambling, no real money can be bet or made,
                  currently using a free currency we call B.
                </div>
              </Col>
              <Col>
            
                <SignIn loadUser={this.loadUser} changeRoute={this.changeRoute}/>
              </Col>
            </Row>
          </Container>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default Home;
