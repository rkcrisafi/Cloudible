import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor (props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      query: '',
    };

  }

  handleSearch(e) {
   e.preventDefault();
   this.props.sendSearch(this.state.query).then(
     (action) => {
       return this.props.history.push(`/results`);
     }
   );
 }

 handleChange(field) {
   return (e) => this.setState({ [field]: e.target.value });
 }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="greeting-search-bar">
          <div className="greeting-logout">
            <h1 className="greeting-user">Hi, {this.props.currentUser.first_name}!</h1>
            <Link to="/" onClick={ () => this.props.logout() } className="logout-button">Sign Out</Link>
          </div>
          <form className="nav-search-bar" onChange={this.handleChange('query')}
            onSubmit={this.handleSearch}>
            <input className="search-bar" placeholder="Search for a great book"/>
          </form>
        </div>
      );
    } else {
      return (
        <div className="greeting-search-bar">
          <div className="greeting-signin-link">
            <Link to='/login'>Sign In</Link>
          </div>
          <form className="nav-search-bar" onChange={this.handleChange('query')}
            onSubmit={this.handleSearch}>
            <input className="search-bar" placeholder="Search for a great book"/>
          </form>
        </div>
      );
    }
  }

}

export default withRouter(Greeting);
