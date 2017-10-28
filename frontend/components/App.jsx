import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, withRouter, Link } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';
// import BookIndexContainer from './books/book_index_container';
import BookIndexContainer from './books/books_homepage/book_index_container_homepage';

const App = (props) => (
  <div>
    <header>
      {!['/login', '/signup'].includes(props.location.pathname) ? (

        // <div>
        //   <div className="front-page">
        //     <div className="greeting-nav">
        //       <div className="logo-browse">
        //         <Link to="/" className="app-logo">Cloudible</Link>
        //         <Link to="/books" className="browse-library">Browse Cloudible</Link>
        //       </div>
        //       <GreetingContainer className="greeting-container"/>
        //     </div>
        //   </div>
        //   <div>
        //     <Route exact path="/" component={BookIndexContainer} />
        //   </div>
        // </div>


        <div>
          <div className="hfront-page">
            <div className="hgreeting-nav">
              <div className="hlogo-browse">
                <Link to="/" className="happ-logo">Cloudible</Link>
                <Link to="/books" className="hbrowse-library">Browse Cloudible</Link>
              </div>
              <GreetingContainer className="hgreeting-container"/>
            </div>
          </div>
          <div>
            <Route exact path="/books" component={BookIndexContainer} />
          </div>
        </div>

      ) : (null)}
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default withRouter(App);
