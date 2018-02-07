import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBookReviews } from '../../actions/review_actions';
import BookReviewIndex from './book_review_index';

const mapStateToProps = (state, ownProps) => {
  let bookId = ownProps.match.params.bookId;
  let reviews = state.books[bookId].reviewIds.map(reviewId => {
    let review = state.reviews[reviewId];
    if (!review) {
      return null;
    }

    let rating = state.ratings[review.rating_id];
    return {
      review,
      rating,
    };
  });
  reviews = reviews.filter((review) => review !== null);
  return {
    bookId,
    reviews,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookReviews: (bookId) => dispatch(fetchBookReviews(bookId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookReviewIndex));
