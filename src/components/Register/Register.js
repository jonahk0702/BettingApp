import React, { Component } from "react";

import { CountryDropdown} from 'react-country-region-selector';

//Okay, this is quite messy, but here I go

//For the states, i think we'll need to save all of the users
//inputed data in this state. I havent done it yet
class Register extends Component {
  state = {
    Country:'',
    
      firstName: ' ',
      secondName: ' ',
      dateOfBirth: ' ',//Time.now,
      email: ' ',
      password: ' ',
      passwordConfirm: ' ',
      IdNumber: ' ',

      currentPage:1

    
  };

//This just stores in state the country they are from
  selectCountry (val) {
    this.setState({ country: val });
  }

Validate = () => {
  
    let {email, password, firstName, secondName, dateOfBirth, passwordConfirm
      , IdNumber} = this.state;
      let {Country} = this.state;
      console.log(email, "-", password, "-", firstName, "-", secondName, "-",
                  dateOfBirth, "-", passwordConfirm, "-", Country, "-", IdNumber);

  //First, lets make sure all fields are filled in
    if(email === ' ' || password === ' ' || firstName === ' ' || 
      secondName === ' ' || dateOfBirth === ' ' || passwordConfirm === ' ' 
      || /*country === ' ' || */IdNumber === ' '){
      console.log("Please fill in all infomation");
    }

    //if they are all completed, lets make sure email is valid
    else if(!email.includes('.')) {
              if(!email.includes('@')){
                 console.log("Not a valid Email");
               }
        }
        //Password length
      else if (password.length < 8){
          console.log("Password is too short");
        }
        //password contains special cases
        else if (password.toUpperCase() === password || password.toLowerCase()
          === password){
            console.log("Password has only upper or lowers cases");
        }

        else if(!isNaN(parseFloat(password)) && isFinite(password)){
          console.log('It may contain a nymber');
        }

        else if(password !== passwordConfirm){
          console.log("make sure the passwords match");

        }
        else{
          console.log("Sucess!");
        }
        
     
    
  }
enterEmail = (newEmail) =>{
      this.setState({email: newEmail.target.value});

  }

  enterPassword = (newPassword) =>{
      this.setState({password: newPassword.target.value});
  }

  

  enterName = (name) =>{
      this.setState({firstName: name.target.value});
      console.log(name.target.value);
  }

  enterSurname = (secondName) =>{
      this.setState({secondName: secondName.target.value});
      console.log(secondName.target.value);
  }

  enterDateofBirth = (dateBirth) =>{
      this.setState({dateOfBirth: dateBirth.target.value});
  }

  enterconPassword = (ConfirmPassWord) =>{
      this.setState({passwordConfirm: ConfirmPassWord.target.value});
  }

  enterIDNum = (idNum) =>{
      this.setState({IdNumber: idNum.target.value});
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
                    <p
                      onClick={() => this.props.handleSwitch(false)}
                      className="f6 link dim black db pointer tc">
                      Already have an account?
                    </p>
                   <div className="mt3">
                        <label className="db fw6 lh-copy f6">First Name</label>
                        <input 
                        onChange={this.enterName}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6">Surname</label>
                        <input 
                        onChange={this.enterSurname}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                    </div>
                  
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6">Date of Birth</label>
                      <input
                            onChange={this.enterDateofBirth}
                            className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                            type="date"
                      />
                    </div>

                    <div className="mt3">
                      <label className="db fw6 lh-copy f6">email Adress</label>
                      <input 
                          onChange={this.enterEmail} className="pa2 input-reset ba bg-transparent hover-bg-black w-100" 
                      />
                    </div>

                    <div className="mv3">
                      <label className="db fw6 lh-copy f6">Password</label>
                      <input type="password"
                        onChange={this.enterPassword}
                        className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                      </div>

                      <div className="mv3">
                       <label className="db fw6 lh-copy f6">Confirm Password</label>
                        <input type="password"
                        onChange={this.enterconPassword}
                          className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                      </div>
                        <div className="mt3">
                          <label className="db fw6 lh-copy f6">Country of Residence</label>
                          <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />
                      </div>

                      <div className="mt3">
                          <label className="db fw6 lh-copy f6">{country} Idenitifaction Number</label>
                          <input 
                          onChange={this.enterIDNum}
                          className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                      </div>

                      <div className="mt3">
                        <input
                          onClick={this.Validate}
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                          type="submit"
                          value="Create Account!"
                        />
                      </div>
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
