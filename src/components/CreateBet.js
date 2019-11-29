import React, { Component } from "react";
import {Container, Row, Col, Button, InputGroup, FormControl,Form } from "react-bootstrap";
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
      Amount:0

    };

  }

unloadUser = () => {
  this.props.unloadUser();
}

changeRoute = (name) => {
    this.props.changeRoute(name);
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


  handleChangeAmount = (e) => {
     let {n, value} = e.target;
    if(n === 0){

    }
     if(!value.includes(" ")){
      this.setState({Amount: value});
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
      So you're ready to make your own bet? Just some things to keep in mind, make your bet as
       simple and concise as possible. You only have 400 charactors. Make it simple. Goodluck! 
       Ps. as ussual there will be more info at the bottom.
     </Col>
     </Row>
     <br/>
     <hr/>
     <br/>
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
      The Amount you want to bet is: <b className='red f3'> {AmountErr}</b>
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

      <CreateConfirmModal
                 
                  show={this.state.modalShow}
                  onHide={modalClose}
                  userid = {this.props.userid}
                  id = {this.state.ID}
                  price = {this.state.Amount}
                  expiry = {this.state.daySet + "/" + this.state.MonthSet + "/" + this.state.YearSet}
                  betdiscription = {this.state.betDiscription}
                  defualtwinner = {this.state.ExpiryChoice}

                 // 
                />
      
      <a className='f6 black bt bb pa1' href="/">Our Terms of Service and stuff</a>   
     <br/>
 
     <hr/>
     <br/>
     <Row>
     <Col className='tl f5'>Okay, heres the deal... 
     <br/>
     - For starters, every bet has an expiry date, it may be in days or months. The bet creater will
      decide if reaching the expiry date means one side wins or if the bet simple dissapears and
       both sides are reembursed. <br/>
      - The Bet Discirption is what the person who will take up the bet will see. A person will
       be able to take this pet on the positive (betting on the statement entered) or negetive
        side (betting against the statement.) <br/>
      - The odds are supposed to be simple. Think of it as pot. Each side will put a certain Amount 
       of Bs into the pot and the winner gets the entire pot. The Odds are simply the ratio you'll 
        need to put in against the other person. <br/>
      - By clicking "Create Bet!" you are not only agreeing to our terms of service, but also taking 
       up the positive side of the bet you just created. 
     </Col>
     </Row>
     </Container>

     <br/>


     </Col>

     </Row>
     </Container>
     <br/>

     </div>
     );
  }
}

export default CreateBet;  