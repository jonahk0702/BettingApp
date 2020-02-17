import React, { Component } from "react";
import {Container, Row, Col, Button, InputGroup, FormControl,Form, ButtonToolbar } from "react-bootstrap";
import NavbarIn from './navbar/NavbarIn'
import "./Register/Register.css";
import CreateConfirmModal from './CreateConfirmModal';

let BetDiscpErrer = "";
let DateErrer = "";

let AmountError = "";

let ErrorSumbol = "•"; 

let BetErr = "";
let ExpiryErr = "";

let AmountErr = "";

let current =  
  <div>

  

  </div>;




class CreateBet extends Component {
  constructor(props) {
    super();
    this.state = { 
      Choice: 1,
      daySet:"0", 
      MonthSet:"0",
      YearSet:"0",
      betDiscription:" ",
      BetLenghth:0,
      ExpiryChoice: "Those who are for this bet",
      modalShow: false,
      ID:"Aj12",
      price:"0"

    };

  }


unloadUser = () => {
  this.props.unloadUser();
}

showPiles = () => {
  current = 
  <div>
    <h3 className='tl'>I Bet that <b className='red'>{BetErr}</b></h3>
     <div className='tl'>
         <InputGroup className="mb-3 sm  ">
            <FormControl onChange={this.handleChangeBet} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
         </InputGroup>
         <div className='red'>{BetDiscpErrer}</div>



         <br/>
         <br/>
         Bet Expires on: <b className = 'red f3'> {ExpiryErr} </b>
         <Form>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridState">
         <Form.Label>DD</Form.Label>
         <Form.Control className='invalid' as="select" onChange={this.handleChangeDay}>
         <option>Choose...</option>
         <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
         <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
         <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
         <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>
         <option>26</option><option>27</option><option>28</option><option>29</option><option>26</option>
         <option>31</option>
         </Form.Control>
         </Form.Group>

     <Form.Group as={Col} controlId="formGridState" >
     <Form.Label>MM</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeMonth} placeholder={"a"}>
     <option>Choose...</option>
     <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
     <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
     <option>11</option><option>12</option>
     </Form.Control>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridState">
     <Form.Label>YYYY</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeYear}>
     <option>Choose...</option>
     <option>2019</option><option>2020</option><option>2021</option>
     <option>2022</option><option>2023</option><option>2024</option>
     <option>2025</option><option>2026</option><option>2027</option>
     <option>2028</option><option>2029</option>
     </Form.Control>
     </Form.Group>
     Jonah is cool 
     </Form.Row>
     <div className='red'>{DateErrer}</div>
     <br/>
        <fieldset>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>
          On bet Expiry, the winner is:
        </Form.Label>
        <Col sm={10} className='bl'>
          <Form.Check
          inline
          defaultChecked 
            type="radio"
            label="The Bet Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            onChange={() => this.setState({ExpiryChoice:"The bet Creater"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="those who Bet against the Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            onChange={() => this.setState({ExpiryChoice:"The opposition"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="It's a draw (both Refunded)"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            onChange={() => this.setState({ExpiryChoice:"It's a draw"})}
          />

        </Col>

      </Form.Group>
    </fieldset>
    <br/>
    </Form>  
    
     </div>
    
     <br/>
     <br/>

          <Form>
  <Form.Row>
    <Col>
      Minimum Amount to join bet: <b className='red f3'> {AmountErr}</b>
    </Col>
    <Col className=''>
      <Form.Control onChange={this.handleChangeAmount} placeholder="B" />
    </Col>
  </Form.Row>
  <br/>
  <Form.Row>
    <Col>
      Maximum Amount to join bet: <b className='red f3'></b>
    </Col>
    <Col className=''>
      <Form.Control onChange={this.handleChangeAmount} placeholder="None (Default)" />
    </Col>
  </Form.Row>
</Form>
<div className='red'>{AmountError}</div> 
         
     <br/>
     <br/>
     <h1>
      <Button variant="outline-secondary" size='lg' block onClick={this.SubmitChecker}>Create Bet!</Button>

      </h1>  

    <Button  variant="outline-secondary" size='lg' onClick={this.unSelect}>Back</Button>
 

  </div>
  this.setState({a:54});
} 
unSelect = () => {
  this.defaultIt();
}

showFriends = () => {

  current = 
  <div>
    <h3 className='tl'>I Bet that <b className='red'>{BetErr}</b></h3>
     <div className='tl'>
         <InputGroup className="mb-3 sm  ">
            <FormControl onChange={this.handleChangeBet} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
         </InputGroup>
         <div className='red'>{BetDiscpErrer}</div>



         <br/>
         <br/>
         Bet Expires on: <b className = 'red f3'> {ExpiryErr} </b>
         <Form>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridState">
         <Form.Label>DD</Form.Label>
         <Form.Control className='invalid' as="select" onChange={this.handleChangeDay}>
         <option>Choose...</option>
         <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
         <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
         <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
         <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>
         <option>26</option><option>27</option><option>28</option><option>29</option><option>26</option>
         <option>31</option>
         </Form.Control>
         </Form.Group>

     <Form.Group as={Col} controlId="formGridState" >
     <Form.Label>MM</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeMonth} placeholder={"a"}>
     <option>Choose...</option>
     <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
     <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
     <option>11</option><option>12</option>
     </Form.Control>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridState">
     <Form.Label>YYYY</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeYear}>
     <option>Choose...</option>
     <option>2019</option><option>2020</option><option>2021</option>
     <option>2022</option><option>2023</option><option>2024</option>
     <option>2025</option><option>2026</option><option>2027</option>
     <option>2028</option><option>2029</option>
     </Form.Control>
     </Form.Group>
     Jonah is cool 
     </Form.Row>
     <div className='red'>{DateErrer}</div>
     <br/>
        <fieldset>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>
          On bet Expiry, the winner is:
        </Form.Label>
        <Col sm={10} className='bl'>
          <Form.Check
          inline
          defaultChecked 
            type="radio"
            label="The Bet Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            onChange={() => this.setState({ExpiryChoice:"The bet Creater"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="those who Bet against the Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            onChange={() => this.setState({ExpiryChoice:"The opposition"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="It's a draw (both Refunded)"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            onChange={() => this.setState({ExpiryChoice:"It's a draw"})}
          />

        </Col>

      </Form.Group>
    </fieldset>
    <br/>
    </Form>  
    
     </div>

     <Container className='tl'>
      <Row>
        <Col>

          We pride ourselves on completely organic odds. Thus you will never be able to set 
          the ods of any bet you create, rather the odds will be determined by the amount people
          we take either side.
        </Col>
      </Row>
    </Container>
    
     <br/>
     <br/>

          <Form>
  <Form.Row>
    <Col>
      Amount bet: <b className='red f3'> {AmountErr}</b>
    </Col>
    <Col className=''>
      <Form.Control onChange={this.handleChangeAmount} placeholder="B" />
    </Col>
  </Form.Row>

</Form>
<div className='red'>{AmountError}</div> 
         
     <br/>
     <br/>
     <h1>
      <Button variant="outline-secondary" size='lg' block onClick={this.SubmitChecker}>Create Bet!</Button>

      </h1>  

    <Button  variant="outline-secondary" size='lg' onClick={this.unSelect}>Back</Button>
 

  </div>
  this.setState({a:54});
}

showMatcher = () => {

  current = 
  <div>
    <h3 className='tl'>I Bet that <b className='red'>{BetErr}</b></h3>
     <div className='tl'>
         <InputGroup className="mb-3 sm  ">
            <FormControl onChange={this.handleChangeBet} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
         </InputGroup>
         <div className='red'>{BetDiscpErrer}</div>



         <br/>
         <br/>
         Bet Expires on: <b className = 'red f3'> {ExpiryErr} </b>
         <Form>
         <Form.Row>
         <Form.Group as={Col} controlId="formGridState">
         <Form.Label>DD</Form.Label>
         <Form.Control className='invalid' as="select" onChange={this.handleChangeDay}>
         <option>Choose...</option>
         <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
         <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
         <option>11</option><option>12</option><option>13</option><option>14</option><option>15</option>
         <option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
         <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option>
         <option>26</option><option>27</option><option>28</option><option>29</option><option>26</option>
         <option>31</option>
         </Form.Control>
         </Form.Group>

     <Form.Group as={Col} controlId="formGridState" >
     <Form.Label>MM</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeMonth} placeholder={"a"}>
     <option>Choose...</option>
     <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>
     <option>6</option><option>7</option><option>8</option><option>9</option><option>10</option>
     <option>11</option><option>12</option>
     </Form.Control>
     </Form.Group>

     <Form.Group as={Col} controlId="formGridState">
     <Form.Label>YYYY</Form.Label>
     <Form.Control as="select" onChange={this.handleChangeYear}>
     <option>Choose...</option>
     <option>2019</option><option>2020</option><option>2021</option>
     <option>2022</option><option>2023</option><option>2024</option>
     <option>2025</option><option>2026</option><option>2027</option>
     <option>2028</option><option>2029</option>
     </Form.Control>
     </Form.Group>
     Jonah is cool 
     </Form.Row>
     <div className='red'>{DateErrer}</div>
     <br/>
        <fieldset>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>
          On bet Expiry, the winner is:
        </Form.Label>
        <Col sm={10} className='bl'>
          <Form.Check
          inline
          defaultChecked 
            type="radio"
            label="The Bet Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
            onChange={() => this.setState({ExpiryChoice:"The bet Creater"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="those who Bet against the Creator"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
            onChange={() => this.setState({ExpiryChoice:"The opposition"})}
          />
          <br/>
          <Form.Check
          inline
            type="radio"
            label="It's a draw (both Refunded)"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
            onChange={() => this.setState({ExpiryChoice:"It's a draw"})}
          />

        </Col>

      </Form.Group>
    </fieldset>
    <br/>
    </Form>  
    
     </div>

    
     <br/>
     <br/>

  <Form>
  <Form.Row>
    <Col>
      Required amount to bet: <b className='red f3'> {AmountErr}</b>
    </Col>
    <Col className=''>
      <Form.Control onChange={this.handleChangeAmount} placeholder="B" />
    </Col>
  </Form.Row>

</Form>
<div className='red'>{AmountError}</div> 
         
     <br/>
     <br/>
     <h1>
      <Button variant="outline-secondary" size='lg' block onClick={this.SubmitChecker}>Create Bet!</Button>

      </h1>  

    <Button  variant="outline-secondary" size='lg' onClick={this.unSelect}>Back</Button>
 

  </div>
  this.setState({a:54});

}

changeRoute = (name) => {
    this.props.changeRoute(name);
  }


defaultIt = () => {
  current = <div>
  <div className='tc'> <h2>What type of bet would you like to make?</h2> </div>
    <br/>
    <Container>
  <Row className='tc'>
    <Col>
      <ButtonToolbar > 
        <Button variant="secondary" size="lg" block onClick={this.showMatcher}>
          One - One Matchup
    </Button>
      </ButtonToolbar>
    </Col>
    <Col>  
    <Button variant="secondary" size="lg" block onClick={this.showPiles}>
      Pile On
    </Button>
    </Col>
  </Row>
  <br/>
  <Row>
    <Col>
      
        <Button variant="secondary" size="lg" block onClick={this.showFriends}>
      Friends Only
    </Button>
    </Col>
    <Col>
        <Button variant="secondary" size="lg" block>
      Other
    </Button>
    </Col>
  </Row>
  <br/>
</Container>
</div>
this.setState({a:19});
}

componentDidMount(){
  this.defaultIt();
}

  SubmitChecker = () => {
    let {Amount, daySet, MonthSet, YearSet, BetLenghth } = this.state;
    let runner = true;

    if(BetLenghth > 244){
      BetDiscpErrer = "Your Bet is too long! Please keep it below 244 charactors.";
    }


    if(BetLenghth === 0){
        BetDiscpErrer = "Please do not leave this blank."; 
      }

    if(BetLenghth !== 0 && BetLenghth < 244){
      BetDiscpErrer = "";
      BetErr = "";
    }else{
      runner = false;
      BetErr = ErrorSumbol;

    }

    if(daySet === "0" && MonthSet === "0" && YearSet === "0"){
      DateErrer = "Please make sure all boxes are filled.";
      runner = false;
      ExpiryErr = ErrorSumbol;
    }
    if(daySet !== "0" && MonthSet !== "0" && YearSet !== "0"){
      DateErrer = "";  
      ExpiryErr = "";
    }

    if(Amount === 0 || isNaN(Amount) ){
      runner = false;
      AmountError = "Please enter a number here.";
      AmountErr = ErrorSumbol;  
    }else{
      AmountError = "";
      AmountErr = "";
    }

    if(runner === true){
      this.setState({ modalShow: true })
    }
  
    this.setState({test: "A"});
  }


  handleChangeBet = (e) => {
    let {n, value} = e.target;
    if(n === 0){

    }
    if(value !== " "){
      this.setState({BetLenghth: value.length});

      this.setState({betDiscription: value});
      } 
    }

    changeRoute = () => {
      
      this.props.changeRoute('betInfo');
    }

    terms = () => {
      this.props.changeRoute('TermsAndConditions');
    }


  handleChangeAmount = (e) => {
     let {n, value} = e.target;
    if(n === 0){

    }
     if(!value.includes(" ")){
        let hold = value;
        let len = ("" + hold).length;
        let str = hold + "";
         for(let i = len; i < 6 ; i++){
           str = "0" + str  ;
         }
    
      this.setState({Amount: str});

    }
  }

  handleChangeDay = (e) => {
    let {n, value} = e.target;
    if(n === 0){

    }
    this.setState({daySet: value});
  }

  handleChangeMonth = (e) => {
    let {n, value} = e.target;
    if(n === 0){

    }
    this.setState({MonthSet: value});
  }

  handleChangeYear = (e) => {
    let {n, value} = e.target;
    if(n === 0){

    }
    this.setState({YearSet: value});
  }

  render() {
    //let date = new Date();
    let modalClose = () => this.setState({ modalShow: false });
  
    
    return (
     <div>
     <NavbarIn changeRoute={this.changeRoute} unloadUser={this.unloadUser}/>
     <br/><br/><br/>
     <h1 className="tc white i f1 font">Create a bet!</h1>
     <br/><br/>
     <Container>
     <Row>
     <Col className='f4 solidBR bg-white'>
     <br/>
     <Container className='tc'>
     <Row>
     <Col>
     
      <br/>
       <Button  variant="outline-secondary" block size='lg' onClick={this.changeRoute}>
          First time? Or not exactly sure how to make the perfect bet? Here is a fast guide
       </Button>
     </Col>

   
     
     </Row>
     <br/>
     <hr/>
     <br/>
     {current}
      

      <CreateConfirmModal
                 
                  show={this.state.modalShow}
                  onHide={modalClose}
                  userid = {this.props.userid}
                  email={this.props.email}
                  id = {this.state.ID}
                  price = {this.state.Amount}
                  expiry = {this.state.daySet + "/" + this.state.MonthSet + "/" + this.state.YearSet}
                  betdiscription = {this.state.betDiscription}
                  defualtwinner = {this.state.ExpiryChoice}

                 // 
                />
      
      <span className='f6 black bt bb pa1' onClick={this.terms}>Our Terms of Service and stuff</span>   
     <br/>
 
     <hr/>
     <br/>
  
     </Container>



     </Col>

     </Row>
     </Container>
     <br/>

     </div>
     );
  }
}

export default CreateBet;  