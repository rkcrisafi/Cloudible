import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.userId);
  }

  render () {
    // debugger
    const pic = this.props.user.image_url ? this.props.user.image_url : null;
    return (
      <div className="user-profile">
        <div className="user-pic-reviews">
          { !$.isEmptyObject(this.props.user) ? (
            <div>
              <div className="user-pic-description">
                <div className="user-pic-part">
                  <img src={pic} width="93" height="93"  className="user-image"/>
                </div>
                <div className="user-description">
                  <div className="user-first-name">{this.props.user.first_name}</div>
                  <Link className="user-create-my-profile" to={`/listener/${this.props.userId}/edit`}>Create My Profile</Link>
                  <div className="user-location">
                    {this.props.user.location ?
                    this.props.user.location :
                    null }
                    <div className="listener-since">Listener Since {this.props.user.created_at.slice(0,4)}</div>
                  </div>
                </div>
              </div>
              <div className="user-ratings"></div>
            </div>
          ) : null
        }
          </div>
        </div>
    );
  }
}

export default withRouter(UserProfile);
