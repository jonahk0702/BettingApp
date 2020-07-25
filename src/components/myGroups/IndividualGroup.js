import React, { Component } from "react";
import { Col, Row, Container, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default class IndividualGroup extends Component{
constructor(props) {
    super();
    this.state = {
    };
  }


  refresh = () => {
    this.props.refresh(this.props.code, this.props.name,this.props.subject);
  }

  render(){ 
  return (   
    <div className='w-100'>
      <div className='bl br tc green w-100'>
        <Container>  
          <Row>
            <Col md className='f4 tc bt bb ma1 w-75'>{this.props.name}</Col>
              <Col xs={2} className='bb bt ma1'>{this.props.amount}</Col>
          </Row>
          <Row className='tc'>
            <Col className='xl'>
                <Button 
                  variant="primary"
                  onClick={this.refresh}
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
