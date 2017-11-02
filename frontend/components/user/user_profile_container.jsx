import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
  // debugger
  return {
    user: state.user,
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
