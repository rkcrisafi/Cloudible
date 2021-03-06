import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserReviewIndex from './user_review_index';
import { fetchUserReviews } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
  let currentUserId = (state.session.currentUser ? state.session.currentUser.id : null);
  let reviews = state.user.reviewIds.map(id => {
    let review = state.reviews[id];
    if (!review) {
      return null;
    }
    let rating = state.ratings[review.rating_id];
    let book = state.books[rating.book_id];
    return {
      review,
      rating,
      book
    };
  });
  reviews = reviews.filter(review => review !== null);
  return {
    currentUserId,
    userId: ownProps.match.params.userId,
    reviews,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserReviewIndex));
