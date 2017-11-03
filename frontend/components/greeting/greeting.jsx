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
       this.props.history.push(`/results`);
       this.setState({query: ""});
     }
   );
 }

 handleChange(field) {
   return (e) => this.setState({ [field]: e.target.value });
 }

  render () {
    const navBarSearchElement = (
      <form className="nav-search-bar" onChange={this.handleChange('query')}
      onSubmit={this.handleSearch}>
      <div className="search-bar-with-icon">
        <input  value={this.state.query} className="search-bar" placeholder="Search for a great book"/>
        <i onClick={this.handleSearch} className="fa fa-search" aria-hidden="true"></i>
      </div>
    </form>)

    if (this.props.currentUser) {
      return (
        <div className="greeting-search-bar">
          <div className="greeting-logout">
            <h1 className="greeting-user">Hi, {this.props.currentUser.first_name}!</h1>
            <Link to="/" onClick={ () => this.props.logout() } className="logout-button">Sign Out</Link>
          </div>
          {navBarSearchElement}
        </div>
      );
    } else {
      return (
        <div className="greeting-search-bar">
          <div className="greeting-signin-link">
            <Link to='/login'>Sign In</Link>
          </div>
            {navBarSearchElement}
        </div>
      );
    }
  }

}

export default withRouter(Greeting);
