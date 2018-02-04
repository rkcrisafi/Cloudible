import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';

import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, action.reviews.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.id]: action.review });
    default:
      return state;
  }
};

export default ReviewReducer;
