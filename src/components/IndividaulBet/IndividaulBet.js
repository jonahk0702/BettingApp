import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./bets.css";
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

export default class NavBar extends Component{
constructor(props) {
    super();
    this.state = {
      Price: 0,
      Odds: "",
      Expiry:"",
      BetDiscription:"XXX",
      modalShow: false

    };
  }
  render(){
    let modalClose = () => this.setState({ modalShow: false });
  return (
    

    <div >


    

      <div className='bl br tc' href="">
        <Container>
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={2} className='bb bt ma1'>1:3</Col>
            <Col xs={2} className='bb bt ma1'>BXX.XX</Col>
            <Col xs={2} className='bb bt ma1'>01.01.2020</Col>
          </Row>
          <hr/>
          <Row className='tc'>
            <Col className='xl'>
              {//<button className='ma1 blues'>More Info</button> } 
      }
                <Button
                  variant="primary"
                  onClick={() =>  window.location.href = "/Explore" }
                  className='ma1 reds tc w-20 h-20'
                >
                  More Info
                </Button>


                <Button
                  variant="primary"
                  onClick={() => this.setState({ modalShow: true })}
                  className='ma1 reds tc w-20 h-20'
                >
                  Take Bet!
                </Button>

                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                />
              

            </Col>
          </Row>
        </Container>

      </div>
      <br/>
    </div>
  );
}
}
