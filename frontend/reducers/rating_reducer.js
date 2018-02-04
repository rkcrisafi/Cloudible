import { RECEIVE_RATINGS } from '../actions/rating_actions';
import { RECEIVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions';

import merge from 'lodash/merge';

const RatingReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_RATINGS:
      return merge({}, action.ratings);
    case RECEIVE_REVIEW:
      newState[action.review.rating_id].review = action.review;
      return newState;
    case RECEIVE_REVIEWS:
      let ratings = action.reviews.ratings;
      newState = merge({}, state, ratings)
      // for (var ratingProp in ratings) {
      //   newState[ratingProp] = ratings[ratingProp];
      // }
      return newState;
    default:
      return state;
  }
};

export default RatingReducer;

// action.reviews
//
// {
//   1 : { blah blah review stuff, rating: {rating stuff}, blah blah more review props },
//   2 : { blah blah review stuff, rating: {rating stuff}, blah blah more review props },
//   3 : { blah blah review stuff, rating: {rating stuff}, blah blah more review props },
// }
//
//
//
// action.reviews
// {
//   1 : { blah blah review stuff, blah blah more review props },
//   2 : { blah blah review stuff, blah blah more review props },
//   3 : { blah blah review stuff, blah blah more review props },
// }
// action.ratings
//
// {
//   1 : { blah blah rating },
//   2 : { blah blah rating },
//   4 : { blah blah rating },
// }
