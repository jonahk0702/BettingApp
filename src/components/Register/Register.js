import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="mw5 mw7-ns center">
        <br />
        <br />
        <article className="br3 ba --black-10 w-100 w-100-m center shadow-5">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">First Name</label>
            </div>
          </fieldset>
        </article>
      </div>
    );
  }
}

export default Register;
