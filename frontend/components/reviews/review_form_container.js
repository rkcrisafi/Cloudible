import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  let bookId = ownProps.match.params.bookId;
  let ratingId = ownProps.match.params.ratingId;
  return {
    book: state.books[bookId],
    bookId,
    ratingId
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: (bookId, ratingId, review) => dispatch(createReview(bookId, ratingId, review)),
  fetchBook: bookId => dispatch(fetchBook(bookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
