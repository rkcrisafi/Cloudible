import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_RATING = 'RECEIVE_RATING';

export const receiveRating = rating => {
  return {
    type: RECEIVE_RATING,
    rating
  };
};

export const addRating = (book_id, rating) => dispatch => (
  RatingApiUtil.addRating(book_id, rating).then(rating => dispatch(receiveRating(rating)))
);

export const updateRating = (book_id, rating) => dispatch => (
  RatingApiUtil.updateRating(book_id, rating).then(rating => dispatch(receiveRating(rating)))
);
