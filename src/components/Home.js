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
loadUser = (data) =>{
  this.props.loadUser(data);
}
  render() {
    return (
      <div>
        <NavBar changeRoute={this.changeRoute}/>

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
                <div className="tl f4">
                  Custom Bets is the first ever online casino where the bets,
                  odds and time period depends on you. Think that we'll land on
                  Mars before Man United wins a Premier League championship?
                  Make a bet! We post all the bets for anybody to see and take
                  either side! Or do you just want to look for a riduculous bet
                  to take up and make some real money? Just browse our current
                  bets. You can bet as little as 1$! And you're not betting
                  against the house! You are betting other peole, just like you!
                  There is always a winner! Why not have fun in the porcess?
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
