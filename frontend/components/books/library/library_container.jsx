import { connect } from 'react-redux';
import Library from './library';
import { showLibrary, deleteBook, fetchBook } from '../../../actions/book_actions';
import { addRating, updateRating } from '../../../actions/rating_actions';

const mapStateToProps = (state, ownProps) => {
  //
  return {
    books: state.session.currentUser.bookIds.map(id => state.books[id]).filter(el => el !== undefined),
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => ({
  showLibrary: (user_id) => dispatch(showLibrary(user_id)),
  deleteBook: (user_id, book_id) => dispatch(deleteBook(user_id, book_id)),
  addRating: (book_id, rating) => dispatch(addRating(book_id, rating)),
  updateRating: (book_id, rating) => dispatch(updateRating(book_id, rating)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
