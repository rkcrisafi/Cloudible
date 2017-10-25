import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password:"" };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitAction(this.state);
  }

  handleField(type) {
    return (e) => this.setState({[type]: e.target.value});
  }

  render() {
    const buttonText = this.props.formType === 'login' ? "Login" : "Sign Up";
    return (
      <div>
        <form onSubmit={this.handleSubmit(bind(this))}>
          <label>Email
            <input type="text" onChange={this.field("email")} value={this.state.email}/>
          </label>
          <br/>
          <label>Password
            <input type='password' onChange={this.field("password")} value={this.state.password} />
          </label>
          <br/>
          <button>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
