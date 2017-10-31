import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, withRouter, Link, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';
import LandingBookIndexContainer from './books/book_index_container';
import HomepageBookIndexContainer from './books/books_homepage/book_index_container_homepage';
import NavBar from './nav_bar/nav_bar';
import BookShow from './books/book_show/book_show_container';
import LibraryContainer from './books/library/library_container';

const App = (props) => {

    return <div>
        {!['/login', '/signup'].includes(props.location.pathname) ? (
          <div>
          <header>
            <Switch>
              <Route exact path="/" component={NavBar} />
              <Route exact path="/books" component={NavBar} />
              <Route exact path="/books/:bookId" component={NavBar} />
              <Route exact path="/library" component={NavBar} />
            </Switch>
          </header>
            <Switch>
              <Route exact path="/books/:bookId" component={BookShow} />
              <Route exact path="/" component={LandingBookIndexContainer} />
              <Route exact path="/books" component={HomepageBookIndexContainer} />
              <Route exact path="/library" component={LibraryContainer} />
            </Switch>
          </div>
          ) : (null)}


      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>;
};


export default withRouter(App);
