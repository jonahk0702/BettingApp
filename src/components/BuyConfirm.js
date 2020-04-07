import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";
import NavbarIn from "./navbar/NavbarIn";
import "./IndividaulBet/bets.css";

class BuyConfirm extends Component {
  constructor(props) {
    super();
    this.state = { 
      Price: 0,
      Odds: "",
      Expiry:"",
      BetDiscription:"XXX"

    };
  }

  back = () =>{
     window.location.href = "/Explore";
  }
  buy = () => {
    //DO some buy code...
  }

unloadUser = () => {
  this.props.unloadUser();
}

  render() { 
    return (
      <div>
        <NavbarIn unloadUser={this.unloadUser} />
        <br />
        <br />
        <br />
        <h1 className="tc white i f1 font">Are you sure?</h1>
        <br />
        <br />
        <Container>
          <Row>
            <Col className="tc f3 solidBR">
             
             Just Making Sure...
              <br />
              <hr />
        
              <div className='tc'>
                <Container>
                  <Row>
                    <Col className='f4 tc bl ma1'>
                    A summary of bet
                    Description: {this.state.BetDiscription}
                    <br/>
                    Amount to bet: B{this.state.Price}
                    You are betting with {this.state.Odds}.
                    The bet will expire if terms or not already reached by {this.state.Expiry}
                     Buy clicking "Buy" you are accepting our <a href="/Terms">terms of service</a>. 
                          

                      <br/>
                      <br/>
                      <button onClick={this.back} className='ma3 blues h-50 w-20'>Cancel</button>
                      <button onClick={this.buy} className='ma3 reds h-50 w-20' >Buy!</button>
                      <br/>
                      <br/>
                    </Col>
                  </Row>   
                </Container>
              </div>
              <hr/>
             </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BuyConfirm;
