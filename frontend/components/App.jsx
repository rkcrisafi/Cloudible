import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, withRouter, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => (
  <div>
    <header>
      {!['/login', '/signup'].includes(props.location.pathname) ? (
        <div className="greeting-nav">
          <Link to="/" className="app-logo">Cloudible</Link>
          <GreetingContainer />
        </div>
      ) : (null)}
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default withRouter(App);
