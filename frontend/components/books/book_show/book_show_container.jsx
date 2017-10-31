import { connect } from 'react-redux';
import BookShow from './book_show';
import { fetchBook, addBook } from '../../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUserId = state.session.currentUser ? state.session.currentUser.id : undefined;
  let currentUser = state.session.currentUser ? state.session.currentUser : undefined;
  return {
    book: state.books[ownProps.match.params.bookId],
    bookId: ownProps.match.params.bookId,
    currentUserId,
    currentUser
    };
  };

const mapDispatchToProps = dispatch => ({
  fetchBook: (book) => dispatch(fetchBook(book)),
  addBook: (user_id, book_id) => dispatch(addBook(user_id, book_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookShow);
