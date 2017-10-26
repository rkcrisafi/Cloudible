import { connect } from 'react-redux';

import { login, logout, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

//initiating current user lets us use it outside of mapStateToProps;
let currentUser;

const mapStateToProps = (state) => {
  currentUser = state.session.currentUser;
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
