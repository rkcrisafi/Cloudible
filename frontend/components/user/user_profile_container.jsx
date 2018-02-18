import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { withRouter } from 'react-router';
import { showLibrary } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    userId: ownProps.match.params.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (formData, id) => dispatch(updateUser(formData, id)),
    showLibrary: (userId) => dispatch(showLibrary(userId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile));
