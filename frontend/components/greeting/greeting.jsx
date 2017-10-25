import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Hi, {this.props.currentUser.first_name}!</h1>
          <button onClick={ () => this.props.logout() }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <br/>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }

}

export default Greeting;
