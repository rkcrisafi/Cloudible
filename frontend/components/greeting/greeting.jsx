import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h1 className="greeting-user">Hi, {this.props.currentUser.first_name}!</h1>
          <button onClick={ () => this.props.logout() } className="logout-button">Logout</button>
        </div>
      );
    } else {
      return (
        <div className="greeting-signin-link">
          <Link to='/login'>Sign In</Link>
        </div>
      );
    }
  }

}

export default Greeting;
