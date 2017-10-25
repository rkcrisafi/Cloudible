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
        <label className="session-label">Your first name
          <input type="text" onChange={this.handleField("first_name")} value={this.state.first_name} placeholder="First name" className="session-input"/>
        </label>
      </div>);
    } else {
      return (<div className="session-form-type">Sign in</div>);
    }
  }

  addLink(formType) {
    if (this.props.formType === 'login') {
      return (
        <Link to="/signup" className="sign-up-link">Create your Cloudible account</Link>
      );
    } else {
      return (
        <div>Already have an account?
          <Link to="/login" className="sign-in-link">Sign In</Link>
        </div>
      );
    }
  }

  handleField(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === 'login' ? "Sign in" : "Create your Cloudible Account";
    let errs = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });
    return (
      <div className="session-container">
        <form onSubmit={this.handleSubmit.bind(this)} className="session-form">
          <ul className="session-errors">{errs}</ul>
          {this.addName(this.props.formType)}
          <label className="session-label">Email
            <input type="text" onChange={this.handleField("email")} placeholder="Email" value={this.state.email} className="session-input"/>
          </label>
          <br/>
          <label className="session-label">Password
            <input type='password' onChange={this.handleField("password")} placeholder="Password" value={this.state.password} className="session-input"/>
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
