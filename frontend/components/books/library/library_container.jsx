import { connect } from 'react-redux';
import BookIndex from './book_index_homepage';
import { showLibrary, deleteBook, fetchBook } from '../../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookIds: Object.keys(state.books).map(id => state.books[id])
  };
};

const mapDispatchToProps = dispatch => ({
  showLibrary: (user_id) => dispatch(showLibrary(user_id)),
  deleteBook: (user_id, book_id) => dispatch(deleteBook(user_id, book_id)),
  fetchBook: (book) => dispatch(fetchBook(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
