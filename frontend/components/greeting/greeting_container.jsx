import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { sendSearch } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    books: state.search.Book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    sendSearch: (query) => dispatch(sendSearch(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
