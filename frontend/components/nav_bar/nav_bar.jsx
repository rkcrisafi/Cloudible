import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser ? state.session.currentUser : undefined;
  // debugger
  return {
    currentUser
  };
};


const NavBar = (props) => {
  let nav_bar = <div>that supposed to be my navbar</div>;
  // debugger
  if (props.location.pathname === "/" && !props.currentUser)  {
    nav_bar = (
      <div className="front-page">
        <div className="greeting-nav">
          <div className="logo-browse">
            <Link to="/" className="app-logo">
              <img src="https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/Audible_logo%400%2C1x.png" width="150" height="50"  className="greeting-logo"/>

            </Link>
            <Link to="/books" className="browse-library">Browse Cloudible</Link>
          </div>
          <GreetingContainer className="greeting-container"/>
        </div>
     </div>);
  } else {
    nav_bar = (
      <div className="hfront-page">
        <div className="hgreeting-nav">
          <div className="hlogo-browse">
            <Link to="/" className="happ-logo">
              <img src="https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/Audible_logo%400%2C1x.png" width="150" height="50"  className="greeting-logo"/>
            </Link>
            <Link to="/books" className="hbrowse-library">Browse Cloudible</Link>
            { props.currentUser ?
              <Link to="/library" className="nav-library-link">Library</Link> : (null)
            }

            {props.currentUser ?
              <Link to={`/listener/${props.currentUser.id}`} className="nav-listener">Listener Page</Link> : (null)
            }

          </div>
          <GreetingContainer className="hgreeting-container"/>
        </div>
      </div>);
  }
  return nav_bar;
};

export default withRouter(connect(mapStateToProps, null)(NavBar));
