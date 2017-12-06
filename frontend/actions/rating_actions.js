import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_RATING = 'RECEIVE_RATING';

export const receiveRating = rating => {
  return {
    type: RECEIVE_RATING,
    rating
  };
};

export const addRating = (book_id, rating) => dispatch => {
  return RatingApiUtil.addRating(book_id, rating).then(rating => dispatch(receiveRating(rating)));
};

export const updateRating = (book_id, ratingId, rating) => dispatch => {
  return RatingApiUtil.updateRating(book_id, ratingId, rating).then(rating => dispatch(receiveRating(rating)));
};
