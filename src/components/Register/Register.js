import React, { Component } from "react";

import { CountryDropdown } from "react-country-region-selector";

//Okay, this is quite messy, but here I go

//For the states, i think we'll need to save all of the users
//inputed data in this state. I havent done it yet
class Register extends Component {
  state = {
    Country: "",
    firstName: " ",
    secondName: " ",
    dateOfBirth: " ", //Time.now,
    email: " ",
    password: " ",
    passwordConfirm: " ",
    IdNumber: " ",

    currentPage: 1
  };

  //This just stores in state the country they are from
  selectCountry(val) {
    this.setState({ country: val });
  }

  ValidateFirst = () => {
    let { firstName, secondName, dateOfBirth } = this.state;

    console.log(this.detAge);

    if (firstName === " " || secondName === " " || dateOfBirth === " ") {
      console.log("Please fill in all infomation");
    } else if (this.detAge < 18) {
      console.log("You are too young to bet !");
    } else {
      console.log("Sucess!");
      this.setState({ currentPage: 2 });
    }
  };

  ValidateFinal = () => {
    let { Country, email, password, passwordConfirm, IdNumber } = this.state;

    if (
      email === " " ||
      password === " " ||
      passwordConfirm === " " ||
      IdNumber === " " ||
      Country === " "
    ) {
      console.log("Please fill in all infomation");
    } else if (!email.includes(".") || !email.includes("@")) {
      console.log("Not a valid Email");
    } else if (password.length < 8) {
      console.log("Password is too short");
    }
    //password contains special cases
    else if (
      password.toUpperCase() === password ||
      password.toLowerCase() === password
    ) {
      console.log("Password has only upper or lowers cases");
    } else if (!isNaN(parseFloat(password)) && isFinite(password)) {
      console.log("It may contain a number");
    } else if (password !== passwordConfirm) {
      console.log("make sure the passwords match");
    } else {
      console.log("Sucess!");
    }
  };

  enterEmail = newEmail => {
    this.setState({ email: newEmail.target.value });
  };

  enterPassword = newPassword => {
    this.setState({ password: newPassword.target.value });
  };

  enterName = name => {
    this.setState({ firstName: name.target.value });
    console.log(name.target.value);
  };

  enterSurname = secondName => {
    this.setState({ secondName: secondName.target.value });
    console.log(secondName.target.value);
  };

  enterDateofBirth = dateBirth => {
    this.setState({ dateOfBirth: dateBirth.target.value });
  };

  enterconPassword = ConfirmPassWord => {
    this.setState({ passwordConfirm: ConfirmPassWord.target.value });
  };

  enterIDNum = idNum => {
    this.setState({ IdNumber: idNum.target.value });
  };

  enterUsername = countrys => {
    this.setState({ Country: countrys.target.value });
  };

  render() {
    //Just making variables for each state, so i dont have to
    //say this.state every time
    const { country } = this.state;

    //Okay, so I am making an condition. If we are on first page of
    //create account then show this part of the form

    let first;
    let final;

    if (this.state.currentPage === 1) {
      first = (
        <div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">First Name</label>
            <input
              onChange={this.enterName}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6">Surname</label>
            <input
              onChange={this.enterSurname}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>

          <div className="mt3">
            <label className="db fw6 lh-copy f6">Date of Birth</label>
            <input
              onChange={this.enterDateofBirth}
              id="bday"
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
              type="date"
            />
          </div>

          <br />
          <input
            onClick={this.ValidateFirst}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Next"
          />
        </div>
      );

      final = <div />;
    } else {
      first = <div />;
      final = (
        <div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">email Adress</label>
            <input
              onChange={this.enterEmail}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>

          <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input
              type="password"
              onChange={this.enterPassword}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>

          <div className="mv3">
            <label className="db fw6 lh-copy f6">Confirm Password</label>
            <input
              type="password"
              onChange={this.enterconPassword}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">Country of Residence</label>
            <CountryDropdown
              value={country}
              onChange={val => this.selectCountry(val)}
            />
          </div>

          <div className="mt3">
            <label className="db fw6 lh-copy f6">
              {country} Idenitifaction Number
            </label>
            <input
              type=""
              onChange={this.enterIDNum}
              className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
            />
          </div>

          <div className="mt3">
            <input
              onClick={this.ValidateFinal}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Create Account!"
            />
          </div>
        </div>
      );
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
                <p
                  onClick={() => this.props.handleSwitch(false)}
                  className="f6 link dim black db pointer tc"
                >
                  Already have an account?
                </p>

                {first}

                {final}

                <br />
              </fieldset>
            </main>
          </article>
        </div>
        <br /> <br /> <br />
      </div>
    );
  }
}

export default Register;
