import React from 'react';
import Link from 'react-router-dom';

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
      <label>Your first name
        <input type="text" onChange={this.handleField("first_name")} value={this.state.first_name}/>
      </label>);
    }
  }

  addLink(formType) {
    if (this.props.formType === 'login') {
      return (
        <Link to="/signup">Create your Cloudible account</Link>
      );
    } else {
      return (
        <div>Already have an account?
          <Link to="/login">Sign In</Link>
        </div>
      );
    }
  }

  handleField(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === 'login' ? "Sign in" : "Create your Cloudible account";
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {this.addName(this.props.formType)}
          <label>Email
            <input type="text" onChange={this.handleField("email")} value={this.state.email}/>
          </label>
          <br/>
          <label>Password
            <input type='password' onChange={this.handleField("password")} value={this.state.password} />
          </label>
          <br/>
          <button>{buttonText}</button>
          {this.addLink(this.props.formType)}
        </form>
      </div>
    );
  }
}

export default SessionForm;
