import React, { Component } from "react";
import { CountryDropdown} from 'react-country-region-selector';
import "./Register.css";

//Okay, this is quite messy, but here I go 

//For the states, i think we'll need to save all of the users
//inputed data in this state. I havent done it yet
let stylesHolder = 'pa2 input-reset ba bg-transparent hover-bg-black w-100';
let countryHolder = 'Please select a country'; 
let countryStyles = " ";
let idStyles = "";
let idNumberMessage = "";
let FirstMSG = '';
let nameStyle = stylesHolder;
let DateBirthStyle =stylesHolder;

let emailStyles = stylesHolder;
let passwordStyle = stylesHolder;
  
 let emailMessage = '';
 let passwordMsg =''; 
 let currentPage = 1;

  class Register extends Component {
   constructor(props) {
    super(props);
      this.state = {
        Country:'',
        
        name:'',
        dateOfBirth: '',//Time.now,
        email: '',
        password: '',
        passwordConfirm: '',

        IdNumber: '',
        num:'', 
        gender: 'Female'
      }
    }


//This just stores in state the country they are from
 
 changeRoute = (home) => {
  this.props.changeRoute(home);
 }

 loadUser = (email, id) =>{
  this.props.loadUser(email, id);
 }

ValidateFirst = () => {
  let {name, dateOfBirth, email} = this.state;

  if(name === ''){
    
    
    nameStyle += '  invalidbw1';
    FirstMSG = 'Please note all fields are required';
     
  }

  if(dateOfBirth === ''){
      DateBirthStyle += ' invalid bw1';
      FirstMSG = 'Please note all fields are required';
     

  }
  if(name !== ""){
    nameStyle = "pa2 input-reset ba bg-transparent hover-bg-black w-100";
  }
  if(dateOfBirth !== ""){
      DateBirthStyle ="pa2 input-reset ba bg-transparent hover-bg-black w-100";
  }
 

  
   if(email === ''){
      emailStyles += " invalid bw1 ";
    }

    if(!email.includes('.') || !email.includes('@')){
        emailStyles += " invalid bw1 ";
        emailMessage = "Please enter a valid email adress";
        
    }else{
       emailStyles = stylesHolder;
      emailMessage = "";
    }

    if(name !== "" && dateOfBirth !== ""
      && email.includes('.') && email.includes('@')){
        currentPage = 2;
        FirstMSG = '';
      }


    this.setState({num: 'a'});


}



ValidateFinal = () => {
  let success = true;
  let {Country, password, passwordConfirm, IdNumber, name, email, dateOfBirth, gender} = this.state;
  
  if(password === ''){
    passwordStyle += " invalid bw1 ";
    success = false;
  }  
  if(passwordConfirm === ''){
    passwordStyle += " invalid bw1 ";
    success = false;
  } 

  if(IdNumber === ''){
    idStyles = " invalid bw1";
    idNumberMessage = "Please enter a valid Idenitifaction Number";
    success = false;
  }else{
    idStyles = "";
    idNumberMessage ="";
  }
 
  
  if(Country === ''){
    countryStyles = " invalid bw1 ";
    success = false;
  }else{
    countryStyles = " black ";     
  }
       
  


  if (password.length < 8 || password.toUpperCase() === password || password.toLowerCase()
          === password || (isNaN(parseFloat(password)) && isFinite(password))){
          passwordMsg = 'Please chose a valid password. Check below for our password guidlines.';
          success = false;
        }else{
          if(password === passwordConfirm){
            passwordMsg = '';
            passwordStyle = stylesHolder;
           }
           else{
              passwordMsg = 'Please make sure the passwords match';
              success = false;
           }
        }
         this.setState({num: 'a'});

      if(success){

        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              email:email,
              password: password, 
              country: Country,
              name: name,
              dateOfBirth: dateOfBirth,
              idnumber: IdNumber,
              gender: gender,
              birthday: dateOfBirth  
          })
        })
   .then(response => response.json())
   .then(user => {
    if(user.id){
      
      this.loadUser(user.email, user.id);
      this.changeRoute("Explore");
    }
   })
      }
  }
        
     
radioChange = (e) =>{
    this.setState({
      gender: e.currentTarget.value
    });
  }

enterEmail = (newEmail) =>{
      this.setState({email: newEmail.target.value});

  }

  enterPassword = (newPassword) =>{
      this.setState({password: newPassword.target.value});
  }

  

  enterName = (name) =>{
      this.setState({name: name.target.value});
      
  }

  enterSurname = (secondName) =>{
      this.setState({secondName: secondName.target.value});
      console.log(secondName.target.value);
    }

  enterDateofBirth = (dateBirth) =>{
      this.setState({dateOfBirth: dateBirth.target.value});
      console.log(dateBirth.target.value);
  }

  enterconPassword = (ConfirmPassWord) =>{
      this.setState({passwordConfirm: ConfirmPassWord.target.value});
  }
   selectCountry (val) {
    
    this.setState({ Country: val });
    countryHolder = val;
  }

  enterIDNum = (idNum) =>{
      this.setState({IdNumber:idNum.target.value});

  }

  enterUsername = (countrys) =>{
      this.setState({Country: countrys.target.value});
  }


  render() {
    //Just making variables for each state, so i dont have to 
    //say this.state every time
    const {country} = this.state;



 

    //Okay, so I am making an condition. If we are on first page of
    //create account then show this part of the form
  
   
    let first;
    let final;


    if(currentPage === 1){
      first = <div>

              <div className="mt3">
                        <label className="db fw6 lh-copy f6">Full Name</label>
                        <input 
                        placeholder="IE John Smith"
                        type='name'
                        onChange={this.enterName}

                        className={nameStyle}/>

              </div>
             
                  
                <div className="mt3">
                      <label className="db fw6 lh-copy f6">Date of Birth</label>
                      <input
                            onChange={this.enterDateofBirth}
                            type="date"
                            placeholder='YYYY/MM/DD'
                            className={DateBirthStyle}
                      />
              
                </div>

                 <div className="mt3">
                      <label className="db fw6 lh-copy f6">Email Adress</label>
                      <input 
                          onChange={this.enterEmail}
                           className={emailStyles} 
                           placeholder = "Example@gmail.com"
                      />
                      {emailMessage}
                    </div>
                <br/>


                <div className="mt3 tl br2 ba pa3">
                      <label className="db fw6 lh-copy f6">Gender</label>
                        <input type="radio"
                          value="Male"
                          checked={this.state.gender === "Male"}
                          onChange={this.radioChange}
                        
                        />Male
                  <br/>

                        <input type="radio"
                          value="Female"
                          checked={this.state.gender === "Female"}
                          onChange={this.radioChange}
                          />Female

                          <br/>

                        <input type="radio"
                          value="Other"
                          checked={this.state.gender === "Other"}
                          onChange={this.radioChange}
                          />Other

                          <br/>

                        <input type="radio"
                          value="Rather"
                          checked={this.state.gender === "Rather"}
                          onChange={this.radioChange}
                          />Rather not say
                  </div>

                
                    <h5><i>{FirstMSG}</i></h5>
                    <br/>


                  
        

                    <input
                          onClick={this.ValidateFirst}
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                          type="submit"
                          value="Next"
                        />
            </div>

            final = <div></div>
}else{

  first= <div></div>
            final = <div>
              
                 

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6">Password</label>
                      <input type="password"
                        onChange={this.enterPassword}
                        className={passwordStyle}/>
                        {passwordMsg}
                      </div>

                      <div className="mv3">
                       <label className="db fw6 lh-copy f6">Confirm Password</label>
                        <input type="password"
                        onChange={this.enterconPassword}
                          className={passwordStyle} />
                      </div>
                        <div className="mt3">
                          <label className="db fw6 lh-copy f6">Country of Residence</label>
                          <CountryDropdown
                          defaultOptionLabel= {countryHolder}
                            value={"country"}
                            className={countryStyles}
                            onChange={(val) => this.selectCountry(val)} />
                      </div>

                      <div className="mt3">
                          <label className="db fw6 lh-copy f6">{country} Idenitifaction Number</label>
                          <input 
                          type='text'
                          className={idStyles}
                          onChange={this.enterIDNum}
                         />
                         <br/>
                         {idNumberMessage}
                      </div>

                      <div className="mt3">
                        <input
                          onClick={this.ValidateFinal}
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                          type="submit"
                          value="Create Account!"
                        />
                      </div>

                      <br/>
                      <hr/>
                      <br/>
                      <div className='br3 ba tl pa3'>
                      For security purposes, your password must contain: <br/>
                      - An Upper case<br/>
                      - A Lower Case<br/>
                      - A Letter<br/>
                      - A Number<br/>
                      - At least seven charactors

                        

                      </div>



            </div>
}
    return (


      //Depending on page, im changing current, but whatever it is
      //current is always displayed
      <div>
      
         <div className="mw5 mw7-ns center br5 black">
              <br />
              <br />

              <article className="br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR">
                <main className="pa4 black-80 tc">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 ph0 mh0">Register</legend>
                    <a
                      href = "/sign-In"
                      className="f6 link dim black db pointer tc">
                      Already have an account?
                    </a>
                    {first} 
                    {final}

                    
                      <br />
                          
                    </fieldset>
                 </main>
              </article>
            </div>
            <br/> <br/> <br/>
  
 

      </div>
      
    );
  }
}

export default Register;
