import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, withRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import AuthRoute from '../util/route_util';

const App = (props) => (
  <div>
    <header>
      <h1>Cloudible</h1>
      {!['/login', '/signup'].includes(props.location.pathname) ? (
        <div>
          <GreetingContainer />
        </div>
      ) : (null)}
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default withRouter(App);
