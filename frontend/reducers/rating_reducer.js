import { RECEIVE_RATINGS } from '../actions/rating_actions';
import merge from 'lodash/merge';

const RatingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RATINGS:
      return merge({}, action.ratings);
    default:
      return state;
  }
};

export default RatingReducer;
