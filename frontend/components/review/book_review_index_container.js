import { connect } from '.react-redux';
import { fetchBookReviews } from '../../actions/review_actions';
import BookReviewIndex from './book_review_index';

const mapStateToProps = (state, ownProps) => {
  let reviews = reviewIds.map(reviewId => {
    const review = state.reviews[reviewId];
    const rating = state.ratings[review.rating_id];
    return {
      review,
      rating
    };
  });
  return {
    bookId: ownProps.match.params.book_id,
    reviews
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookReviews: (reviews) => dispatch(fetchBookReviews(reviews)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookReviewIndex);
