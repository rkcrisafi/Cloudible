import React from 'react';
import { Link, withRouter } from 'react-router';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render () {
    const pic = this.props.user.image_url ? this.props.user.image_url : null;
    return (
      <div className="user-profile">
        <div className="user-pic-reviews">
          <div className="user-pic-description">
            <div className="user-pic-part">
              <img src={pic} width="93" height="93"  className="user-image"/>
            </div>
            <div className="user-description">
              <div className="user-first-name">{this.props.user.first_name}</div>
              <div className="user-location">
                {this.props.user.location ?
                this.props.user.location :
                null }
              </div>
            </div>
          </div>
          <div className="user-ratings"></div>
        </div>
      </div>
    );
  }
}
