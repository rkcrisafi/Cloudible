import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  let bookId = ownProps.match.params.bookId;
  let ratingId = ownProps.match.params.ratingId;
  return {
    bookId,
    ratingId
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: (bookId, ratingId, review) => dispatch(createReview(bookId, ratingId, review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
