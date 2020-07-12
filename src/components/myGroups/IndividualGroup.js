import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class IndividualGroup extends Component{
constructor(props) {
    super();
    this.state = {
    };
  }


  swapRight = () => {
    this.props.swapRight(this.props.code);
  }

  render(){ 
  return (   
    <div >
      <div className='bl br tc' href="">
        <Container> 
          <Row>
            <Col md className='f4 tc bt bb ma1'>{this.props.name}</Col>
            <Col xs={3} className='bb bt ma1'>{this.props.amount}</Col>
          </Row>
          <Row className='tc'>
            <Col className='xl'>
                <Button 
                  variant="primary"
                  onClick={this.swapRight}
                  className='ma1 reds tc w-20 h-20'
                >
                  Group Info
                </Button>            
            </Col>
          </Row>
        </Container>
      </div>
      <br/>
    </div>
  );
}
}
