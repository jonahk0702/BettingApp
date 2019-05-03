import React, { Component } from "react";

import { CountryDropdown } from "react-country-region-selector";

//Okay, this is quite messy, but here I go

//For the states, i think we'll need to save all of the users
//inputed data in this state. I havent done it yet
class Register extends Component {
  state = {
    whichRegPage: 1,
    Country: ""
  };

  //This just stores in state the country they are from
  selectCountry(val) {
    this.setState({ country: val });
  }

  render() {
    //Just making variables for each state, so i dont have to
    //say this.state every time
    const { country } = this.state;
    const { whichRegPage } = this.state;

    let current;

    //Okay, so I am making an condition. If we are on first page of
    //create account then show this part of the form
    if (whichRegPage === 1) {
      current = (
        <div className="mw5 mw7-ns center br5 black">
          <br />
          <br />

          <article className="br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR">
            <main className="pa4 black-80 tc">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">First Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Surname</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Date of Birth</label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                    type="date"
                  />
                </div>
                <div className="mt3">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Next"
                    onClick={() =>
                      this.setState({
                        whichRegPage: this.state.whichRegPage + 1
                      })
                    }
                  />
                </div>
                <br />
                <p
                  onClick={() => this.props.handleSwitch(false)}
                  className="f6 link dim black db pointer tc"
                >
                  Already have an account?
                </p>
              </fieldset>
            </main>
          </article>
        </div>
      );
    }
    //If the user is on the second page of Regisetr, show this
    else if (whichRegPage === 2) {
      current = (
        <div className="mw5 mw7-ns center br5 black">
          <br />
          <br />

          <article className="br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR">
            <main className="pa4 black-80 tc">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">Email Adress</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Password</label>
                  <input
                    type="password"
                    className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6">Confirm Password</label>
                  <input
                    type="password"
                    className="pa2 input-reset ba bg-transparent hover-bg-black w-100"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6">
                    Country of Residence
                  </label>
                  <CountryDropdown
                    value={country}
                    onChange={val => this.selectCountry(val)}
                  />
                  {console.log(country)}
                </div>

                <div className="mt3">
                  <label className="db fw6 lh-copy f6">
                    {country} Idenitifaction Number
                  </label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black w-100" />
                </div>

                <div className="mt3">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Create Account!"
                    onClick={() =>
                      this.setState({
                        whichRegPage: this.state.whichRegPage + 1
                      })
                    }
                  />
                </div>
                <br />
                <p
                  onClick={() =>
                    this.setState({ whichRegPage: this.state.whichRegPage - 1 })
                  }
                  className="f6 link dim black db pointer tc"
                >
                  Back
                </p>
              </fieldset>
            </main>
          </article>
        </div>
      );
    }

    return (
      //Depending on page, im changing current, but whatever it is
      //current is always displayed
      <div>{current}</div>
    );
  }
}

export default Register;
