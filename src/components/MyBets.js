//Defs need to be rewritten with change to bet stroarge

import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
import IndividaulBet from './IndividaulBet/IndividaulBet';

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
    

  };
}


changeRoute = (name) =>{ 
  this.props.changeRoute(name); 
}

unloadUser = () => {
  this.props.unloadUser();
}

addAmount = (raw) => {
  let str = '';
  for(let i = 0; i < raw.length; i++ ){
      if(raw[i] !== 'o'){
        str += raw[i];
      }
  }
  betAmount.push(str);//parseInt(str));
}

makeArray = () => 
{
  //Get the amount of things in array
  //seprate into the array
  //Make a way of colour coding them to show for and against
}

componentDidMount(){  
 // this.getDiscription();

   fetch('http://localhost:3000/getMyBets', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      email:this.props.email
     })
    }) 
    .then(response => response.json())
    .then(data => {
      
      amountOfBets = data.amount;
      for(let i = 0; i < amountOfBets; i ++){

        let start = (i*7) + 5;
        let end = ((i*7) + 11);
        if( (data.betfor.substring( start, end)) === '000000' ){
          betForr.push(false);
          let rawAmount = data.amountagainst.substring( start, end);
          this.addAmount(rawAmount);
          betIds.push( (data.betagainst.substring(start, end))) ;
        }else{
          betForr.push(true);
          let rawAmount = data.amountfor.substring(start, end);
          betIds.push( (data.betfor.substring(start, end)));
          this.addAmount(rawAmount);
        }
      }
      this.getDiscription();
     
    });
}

getDiscription = () => {
  fetch('http://localhost:3000/getBetDescriptions', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      email:this.props.email
     })
    }) 
    .then(response => response.json())
    .then(data => {
        let allBets = data;
        console.log(data);
        for(let a = 0; a < amountOfBets; a ++){

          for(let b = 0; b < allBets.length; b ++){
            if(betIds[a] === allBets[b].id){
              
              descriptions.push(allBets[b].description);
            }
          }
        }
        
        Holder = betAmount.map((user, i) => {
          return <IndividaulBet key={i} name={descriptions[i]} amount={betAmount[i]}
                  // Odds={(((data[i].amountfor + data[i].total)/(data[i].amountagainst + data[i].total) ))}
                  // expiry={data[i].expiry}
                          />
        }) 

        if(betAmount.length === 0){
          Holder =  <div>
                      <div>
                        <span className='h3 i'>You have no current bets. </span>
                        <br/>
                        <br/>
                        <hr/>
                      </div>
                    </div>
        }

         this.setState({b:'1'});
      });

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