import { RECEIVE_RATINGS } from '../actions/rating_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';

import merge from 'lodash/merge';

const RatingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RATINGS:
      return merge({}, action.ratings);
    case RECEIVE_REVIEW:
      let newState = merge({}, action.ratings);
      newState[action.review.rating_id].review = action.review;
      return newState;
    default:
      return state;
  }
};

export default RatingReducer;
