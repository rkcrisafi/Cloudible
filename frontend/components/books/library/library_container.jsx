import { connect } from 'react-redux';
import Library from './library';
import { showLibrary, deleteBook, fetchBook } from '../../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    books: state.session.currentUser.bookIds.map(id => state.books[id]).filter(el => el !== undefined),
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  showLibrary: (user_id) => dispatch(showLibrary(user_id)),
  deleteBook: (user_id, book_id) => dispatch(deleteBook(user_id, book_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
