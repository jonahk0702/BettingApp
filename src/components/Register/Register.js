import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
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
                />
                </div>
                <br/>
                <p
                  onClick={() => this.props.handleSwitch(false)}
                  className="f6 link dim black db pointer">
                  Already have an account?
                </p>
            </fieldset>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
