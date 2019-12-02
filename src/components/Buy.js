import React, { Component } from "react";
import NavbarIn from "./navbar/NavbarIn";
import {Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

let id='';

class Buy extends Component{
    constructor(props) {
        super(); 
        this.state = {
            id: ''
        };
      }

      changeRoute = (name) =>{
        this.props.changeRoute(name); 
      }

      unloadUser = () => {
        this.props.unloadUser();
      } 

      findID = () =>{
          this.props.findID();
      }

      handleTransaction = () => {
        //this.findID()
        fetch('http://localhost:3000/buyBalance', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
     })
    })

    .then(response => response.json())
    .then(data => {
        if(data.id){
            id = data.id;
          }
      })
    }

      render(){
          return(
              <div>
                  <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
                  <br/><br/><br/>
                  <div className="tc f3 solidBR">
                  <Container>
                  <Row>
            <Col>
              How many Bs would you like to buy?
              <br/><br/><br/>
              <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                <ToggleButtonGroup
                  className="center "
                  type="radio"
                  name="options"
                >

                  <ToggleButton className="ma3" onClick = {this.handleTransaction}>
                    B100 for R50
                  </ToggleButton>
                  <ToggleButton className="ma3" onClick = {this.handleTransaction}>
                    B200 for R100
                  </ToggleButton>
                  </ToggleButtonGroup>
                  </ButtonToolbar>
                  </Col>
                  </Row>
                  <Row>
                      <Col>
                      <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
                      <ToggleButtonGroup
                  className="center "
                  type="radio"
                  name="options"
                >
                  <ToggleButton className="ma3" onClick = {this.handleTransaction}>
                    B500 for R250
                  </ToggleButton>
                  <ToggleButton className="ma3" onClick = {this.handleTransaction}>
                    B1000 for R500
                  </ToggleButton>
                  </ToggleButtonGroup>
              </ButtonToolbar>
              </Col>
              </Row>
              </Container>
              <br/><br/><br/>
              <h3>Information on payment:</h3>
              <p className="f3">Here at Custom Bets, we believe that security comes first. That's why we use a secure paypal server
                  for all transactions. This paypal server is a registered SSL and ensures the highest standard of security
                  for all transactions that will take place.
              </p>
              </div>
              </div>
          )
      }
}

export default Buy;