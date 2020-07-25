import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarIn from "../navbar/NavbarIn";

class BetInfo extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  changeRoute = (name) => { 
    this.props.changeRoute(name); 
  
  }

  unloadUser = () => {
  this.props.unloadUser();
}

  render() {
    return (
      <div>
        
        <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
         <br />
        <br />
        <h1 className="tc i f1 font white">A guide to creating bets</h1>
        <br />
        

        <Container className='tc f3 solidBR'>

          <div className='pa4 i'>  Types of bets </div>
          <Row>

          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>A One - One Matchup</h3>
            <hr/>
            <br/> 
            <span className='f4'>This is the most simple type of bet. Every single bet for is matched with 
            someone who wants to bet agaisnt. As the chances of something happening are not
             always 50/50, the bet creator decides on the odds for this bet. It must be noted 
             that the bet is only created if there is someone for and someone against. If you 
             buy one side, it will be pending until there is someone to be matched with. Thus 
             it is possible for you to push buy, and the bet never to go through. </span>
          </Col>       

            <Col className='pa3 ma3 ba'>
            <br/>
            <h3 className='i pointer'>A Pile on</h3>
            <hr/>
            <br/>
              <span className = 'f4'>
              This type of bet is certainly more fun. Whenever you buy into it, you are added 
              into a pool of every other person who has taken the same side as you. The odds are 
              created on the fly by the amount of people betting for over amount betting against. 
              Thus, once you buy in, the bet will take place. It must be noted that when the best 
              is over, all the total bet is grouped together and shared between the winners. When 
              shared, two metric are considered. First, amount bet and second, the odds when bet. For 
              example someone who bet For when everyone else bet Against will be rewarded more than one 
              who bet when it was 50/50.
              </span>
          </Col>
          </Row>
              
          <Row>
          <Col className='pa3 ma3 ba'>
          <br/> 
            <h3 className='i pointer'>Friend's Bet</h3>
            <hr/>
            <br/>
            <span className='f4'>

            This can be either a Pile on or One - One Matchup but only availbe to a specific 
            group to which you must belong. When creating the bet, the creator will need to 
            select group to which the bet is offered. 
            </span>

          </Col>
          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>Other type</h3>
            <hr/>
            <br/>
              ...
          </Col>    
          </Row>
        <br/>
        <hr/>
        <br/>
        <h2>It is worth understanding... </h2>
        <br/>
        <br/>
        <Row>
          <Col className='pa3 ma3 ba'>
          <br/> 
            <h3 className='i pointer'>Expiry</h3>
            <hr/>
            <br/>
            <span className='f4'>
              All bets need to end sometime. If it is based on a specific even, make sure 
              the expiry date is after the even takes place. When a bet exipes, all payments 
              are made and the bet no longer exists. 
            </span>

          </Col>
          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>End of Betting</h3>
            <hr/>
            <br/>
            For some bets, such as on a football game, there must be a time period before the 
            bet expires yet where no one else may join the bet. An example is when a football 
            game has already starte (depending on creators preference). The End of Betting specfies 
            the time when all bets must be in. However, this can be ignored, simply by setting End 
            of Betting to the Exipry date.   
          </Col>    
          </Row>

          <Row>
          <Col className='pa3 ma3 ba'>
          <br/> 
            <h3 className='i pointer'>Fees...</h3>
            <hr/>
            <br/>
            <span className='f4'>
            You may be wondering how I make any money. It is designed to be as simple and 
            transparent as possible. Whenever a bet is won, I ONLY take a percentage of the winngs(0.05).
            For example both parties bet B100, and thus both accounts are deducted B100. When the 
            bet is over B195 is tranfered into the winners account. That means that when you win a bet 
            it is impossible to lose money, no matter the odds. You will always come out on top. 
            </span>

          </Col>
          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>Who decides the winner?</h3>
            <hr/>
            <br/>
            That is a good question.
          </Col>    
          </Row>
          <Row>
          <Col className='pa3 ma3 ba'>
          <br/> 
            <h3 className='i pointer'>Penalties</h3>
            <hr/>
            <br/>
            <span className='f4'>
              We need to talk about these.
            </span>

          </Col>
          <Col className='pa3 ma3 ba'>
          <br/>
            <h3 className='i pointer'>Winner On Exipry</h3>
            <hr/>
            <br/>
            Some bets are about something specific happening. For example I bet that there 
              will be an earthquake in Mozambique within the next month. The Winner On Expiry 
              setting allows these bets to take place as you can set who wins if, by the expiry 
              date, nothing happens. For example, if by the time the above bet expires there has 
              not been an earthquake, those who bet against the bet will win. 
          </Col>    
          </Row>

          <Row>
          <Col className='pa3 ma3 ba'>
            <span className='f6 black bt bb pa1' onClick={this.terms}>Our Terms of Service and stuff</span> 
          </Col>    
          </Row>
         
        </Container>
        <br/>
         
        </div>
    );
  }
}

export default BetInfo;