import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password:"" };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  addName(formType) {
    if (this.props.formType === 'signup') {
      return (
      <div>
        <div className="session-form-type">Create account</div>
        <label className="session-label">
          <div className="session-input-name">Your first name</div>
          <input type="text" onChange={this.handleField("first_name")} value={this.state.first_name} className="session-input"/>
        </label>
      </div>);
    } else {
      return (<div className="session-form-type">Sign In</div>);
    }
  }

  handleClick () {
    this.props.clearErrors();
    this.props.history.push('login');

  }

  addLink(formType) {
    if (this.props.formType === 'login') {
      return (
        <div>
          <div className="session-division-new">
            <hr className="session-divider"/>
            <h5  className="session-new-to-cloud">New to Cloudible?</h5>
            <hr className="session-divider"/>
          </div>
          <a href="/#signup" className="sign-up-link">Create your Cloudible account</a>
        </div>
      );
    } else {
      return (
        <div className="session-already-have-account">Already have an account?
          <a className="sign-in-link" href="#/login" onClick={() => this.props.clearErrors()}> Sign In</a>
        </div>
      );
    }
  }

  handleField(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === 'login' ? "Sign In" : "Create your Cloudible Account";
    let errs = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });
    let placeHolder = this.props.formType === 'signup' ? "At least 6 characters" : "";
    return (
      <div className="session-container">
        <h1 className="session-logo">cloudible</h1>
        { errs.length === 0 ? null : <ul className="session-errors">{errs}</ul>}
        <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
          {this.addName(this.props.formType)}
          <label className="session-label">
            <div className="session-input-name">Email</div>
            <input type="text" onChange={this.handleField("email")} value={this.state.email} className="session-input"/>
          </label>

          <label className="session-label">
            <div className="session-input-name">Password</div>
            <input type='password' onChange={this.handleField("password")} value={this.state.password} className="session-input" placeholder={placeHolder}/>
          </label>
          <br/>
          <button className="session-submit-button">{buttonText}</button>
          {this.addLink(this.props.formType)}
        </form>
      </div>
    );
  }
}

export default SessionForm;
