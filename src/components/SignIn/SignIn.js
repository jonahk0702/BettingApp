import React from "react";
import "./SignIn.css";

 
let errorMsg = '';
class signIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      email:' ',
      password: ''

    };
  }
  
  holder = () =>{
    this.props.changeRoute("Reg");
  }
 
  goIn = () => {
   this.props.changeRoute("Explore"); 
  }
  
  loadUser = () =>{
    this.props.loadUser(this.state.email);
  }

  enterPassword = (newPassword) =>{
      this.setState({password: newPassword.target.value});
  }

  enterUsername = (newEmail) =>{
      this.setState({email: newEmail.target.value});
  }
  check = () => {
   fetch('http://localhost:3000/signin', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email:this.state.email,
      password: this.state.password
    })
   })
   .then(response => response.json())
   .then(data => {
    if(data.id){
      this.goIn();
      this.loadUser(data.id);
    }
    if(data === "wrong"){
      this.clearFields("Please enter correct credentials");
    }
    if(data === 'unable to get user'){
      this.clearFields('check Internet connection.');
     
    }
   })
    //Will be a full check with the data base.
    
     //
  }

  clearFields = (errorName) => {
    errorMsg = errorName;
    this.setState({password: ''});
    this.setState({a: 1});
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
                    value = {this.state.email}
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
                  value = {this.state.password}
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
                  onClick={this.check}
                  >
                  Sign in
                </button>
              </div>
              <div className="lh-copy mt3">
                <div
                 className="f5 b link dim red db pointer">
                  {errorMsg}
                </div>
              </div>
              <div className="lh-copy mt3">
                <div
                 onClick={this.holder}
                  className="f6 link dim black db pointer">
                  Create an Account
                </div>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default signIn;
