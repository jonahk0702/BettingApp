//Defs need to be rewritten with change to bet stroarge

import React, { Component } from "react";
import { Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
import MyIndividaulBet from './IndividaulBet/MyIndividaulBet';


let Holder = <div></div>;

let amountOfBets = 0;
let betAmount = [];
//let amountFor = [];
//let amountAgainst = [];
let descriptions = [];
let betForr = [];
let betIds = [];

class MyBets extends Component {
  constructor(props) {
    super();
    this.state = { 
      Re:""
  };
}


changeRoute = (name) =>{ 
  this.props.changeRoute(name); 
}

unloadUser = () => {
  this.props.unloadUser();
}

componentDidMount(){
  this.starter();

   this.starter();

}
 
 starter = () =>{
    fetch('http://localhost:3000/getMyBets ', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      userId: this.props.userId
    })
   })
   .then(response => response.json())
   .then(data => {
    console.log("phase 1");
    for (var i = 0; i < data.length; i++) {
      if(data[i].better === this.props.userId){
        data[i].side = "for";
        console.log("phase 2");
      }else{
        data[i].side = "against";
        console.log("phase 3");
      } 
    }
     this.setState({a:1254});

    Holder = data.map((user, i) => { 
          return <MyIndividaulBet key={i} betid={data[i].betid} name={data[i].description} amount={data[i].total}
                  expiry={data[i].expires} userId={this.props.creator} price={data[i].amount} email={this.props.email} 
                  side={data[i].side}    />

        })
     
     });

   this.setState({a:124});
}



  render() {

    return (
     <div>
     <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
     <br/><br/><br/>
     <h1 className="tc white i f1 font">My Bets!</h1>
     <br/><br/>
        <Container>
  			<Row>
 			   <Col className='tc f3 solidBR bg-white'>
 			   

        
          <hr/><br/>

           <ButtonToolbar className="center mw5 mw7-ns center bg-light-gray pa2 ma3 ph5-ns">
              
                <ToggleButtonGroup
                  className="center "
                  type="radio"
                  name="options"
                  defaultValue={1}
                >

                  <ToggleButton className="ma2" size='lg' value={1} onClick={this.cheap}>
                    Active Bets
                  </ToggleButton>
                  <ToggleButton className="ma2" size='lg' value={2} onClick={this.goodOdds}>
                    Expired
                  </ToggleButton>
                  <ToggleButton className="ma2" size='lg' value={3} onClick={this.expires}>
                    Pending
                  </ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar> 
              <br/>
              <hr/>
              <MyIndividaulBet name="Description" side="Side of bet" price="Amount" expiry="Expiry"/>
              <br/>

          {Holder}
 			   </Col>
  		
			</Row>
		</Container>
    <br/>
      </div>
    );
  }
}

export default MyBets;  