import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';



export default (props) => {
  let nav_bar;
  if (props.location.pathname === "/") {
    nav_bar = (
      <div className="front-page">
        <div className="greeting-nav">
          <div className="logo-browse">
            <Link to="/" className="app-logo">Cloudible</Link>
            <Link to="/books" className="browse-library">Browse Cloudible</Link>
          </div>
          <GreetingContainer className="greeting-container"/>
        </div>
     </div>)
  } else if (props.location.pathname = "/books") {
    nav_bar = (
      <div className="hfront-page">
        <div className="hgreeting-nav">
          <div className="hlogo-browse">
            <Link to="/" className="happ-logo">Cloudible</Link>
            <Link to="/books" className="hbrowse-library">Browse Cloudible</Link>
          </div>
          <GreetingContainer className="hgreeting-container"/>
        </div>
      </div>)
  }
  return nav_bar;
};