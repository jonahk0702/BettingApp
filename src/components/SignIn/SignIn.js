import React from "react";
import "./SignIn.css";
class signIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email:' ',
      password: ' '

    };
  }
  

  enterPassword = (newPassword) =>{
      this.setState({password: newPassword.target.value});
  }

  enterUsername = (newEmail) =>{
      this.setState({email: newEmail.target.value});
  }

  render() {
    return (
      <div className="mw5 mw7-ns center br5 black">
        <br />
        <br />

        <article className="br3 ba --black-10 w-100 w-100-m center shadow-5 solidBR">
          <main className="pa4 black-80 tc">
            <div className="">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.enterUsername}
                  />
                </div>
                <div className="mv3">
                  <label 
                   className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.enterPassword}
                  />
                </div>
              </fieldset>
              <div className="">
                <button 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  >
                  Sign in
                </button>
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => this.props.handleSwitch(true)}
                  className="f6 link dim black db pointer">
                  Create an Account
                </p>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default signIn;
