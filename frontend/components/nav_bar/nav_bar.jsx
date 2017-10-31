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
            <Link to="/" className="app-logo">Cloudible</Link>
            <Link to="/books" className="browse-library">Browse Cloudible</Link>
          </div>
          <GreetingContainer className="greeting-container"/>
        </div>
     </div>);
  } else if (props.location.pathname === "/books" || props.match.path === "/books/:bookId" || props.match.path === "/library") {
    nav_bar = (
      <div className="hfront-page">
        <div className="hgreeting-nav">
          <div className="hlogo-browse">
            <Link to="/" className="happ-logo">Cloudible</Link>
            <Link to="/books" className="hbrowse-library">Browse Cloudible</Link>
          </div>
          <GreetingContainer className="hgreeting-container"/>
        </div>
      </div>);
  }
  return nav_bar;
};

export default withRouter(connect(mapStateToProps, null)(NavBar));
