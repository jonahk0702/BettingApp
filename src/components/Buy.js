import React, { Component } from "react";
import NavbarIn from "./navbar/NavbarIn";
import {Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

let balance;


class Buy extends Component{
    constructor(props) {
        super(); 
        this.state = {
            amount: 0,
            id: '',
            b:'1'
        };
      }

      changeRoute = (name) =>{
        this.props.changeRoute(name); 
      }

      unloadUser = () => {
        this.props.unloadUser();
      } 

      buy1 = () =>{
          this.setState({amount: 100})
          this.handleTransaction()
      }

      buy2 = () =>{
          this.setState({amount: 200})
          this.handleTransaction()
      }

      buy3 = () =>{
        this.setState({amount: 500})
        this.handleTransaction()
    }

    buy4 = () =>{
        this.setState({amount: 1000})
        this.handleTransaction()
    }

    componentDidMount(){  
      this.getTotal();
    }

    getTotal = () => {
  fetch('http://localhost:3000/getBalance', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: this.props.userId
    })
   })
   .then(response => response.json())
   .then(data => {
     balance = data;
     this.setState({b:'5'});
   });

}

      handleTransaction = () => {
        //this.findID()
        fetch('http://localhost:3000/buyBalance', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
         amount: this.state.amount,
         email: this.props.email
     })
    })

    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.getTotal();
      })
    }

      render(){
          return(
              <div>
                  <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser} userId={this.props.userId}/>
                  <br/><br/><br/>
                  <div className="tc f3 solidBR ma4"> 
                  <span>You have B {balance} </span>
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

                  <ToggleButton className="ma3" onClick = {this.buy1}>
                    B100 for R50
                  </ToggleButton>
                  <ToggleButton className="ma3" onClick = {this.buy2}>
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
                  <ToggleButton className="ma3" onClick = {this.buy3}>
                    B500 for R250
                  </ToggleButton>
                  <ToggleButton className="ma3" onClick = {this.buy4}>
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