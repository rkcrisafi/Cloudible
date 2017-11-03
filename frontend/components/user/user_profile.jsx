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


  handleSubmit(imageFile) {
    const formData = new FormData();
    formData.append('user[image]', imageFile);
    this.props.updateUser(formData, this.props.userId);
  }

  handleUpload(e) {
    var file    = e.currentTarget.files[0];
    var reader  = new FileReader();
    reader.onloadend = () => {
      this.handleSubmit(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render () {
    // debugger
    const pic = this.props.user.imageUrl ? this.props.user.imageUrl : null;
    return (
      <div className="user-profile">
        <div className="user-pic-reviews">
          { !$.isEmptyObject(this.props.user) ? (
            <div>
              <div className="user-pic-description">
                <div className="user-pic-upload-botton">
                  <div className="user-pic-part">
                    <img src={pic} width="93" height="93"  className="user-image"/>
                  </div>
                  <form className="user-upload-photo" >
                    <label className="user-photo-upload">
                      <i className="fa fa-camera" aria-hidden="true"></i>
                      { pic === "/assets/default_user_300x300-abac2ae4f560ab7dd8bc8880dfd274b5c9750bd4487710ecbcaa7f63f6ce0f09.png" ? "Add Photo" : "Edit Photo"}
                      <input type="file" onChange={(e) => this.handleUpload(e)}/>
                    </label>
                  </form>
                </div>
                <div className="user-description">
                  <div className="user-first-name">{this.props.user.first_name}</div>

                    <div className="listener-since">Listener Since {this.props.user.created_at.slice(0,4)}</div>
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
