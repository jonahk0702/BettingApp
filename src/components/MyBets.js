import React, { Component } from "react";
import { Container, Row, Col, ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
import IndividaulBet from './IndividaulBet/IndividaulBet';

let Holder = <div></div>;


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


makeArray = () => 
{
  //Get the amount of things in array
  //seprate into the array
  //Make a way of colour coding them to show for and against
}

componentDidMount(){  

   fetch('http://localhost:3000/getMyBets', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
      email:this.props.email
     })
    }) 
    .then(response => response.json())
    .then(data => {
      console.log(data);
        
       // Holder = data.map((user, i) => { 
       //    return <IndividaulBet key={i} id={data[i].id} name={data[i].description} amount={data[i].total}
       //            Odds={(((data[i].amountfor + data[i].total)/(data[i].amountagainst + data[i].total) ))}
       //            expiry={data[i].expiry} email={this.props.email} bought={this.bought}       />

       //  }) 
     
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
          <IndividaulBet name={"I bet that Ramaposa is an Alien"}/>
           <IndividaulBet name={"I bet the Mac Miller faked his death"}/> 
           <IndividaulBet name={"I bet that Micheal Obama is "}/>

 			   </Col>
  		
			</Row>
		</Container>
    <br/>
      </div>
    );
  }
}

export default MyBets;  