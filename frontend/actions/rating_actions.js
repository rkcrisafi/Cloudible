import * as RatingApiUtil from '../util/rating_api_util';

export const RECEIVE_RATING = 'RECEIVE_RATING';
export const RECEIVE_RATINGS = 'RECEIVE_RATINGS';

export const receiveRatings = ratings => {
  return {
    type: RECEIVE_RATINGS,
    ratings
  };
};

export const receiveRating = rating => {
  return {
    type: RECEIVE_RATING,
    rating
  };
};

export const fetchRatings = (book_id) => dispatch => {
  return RatingApiUtil.fetchRatings(book_id).then(ratings => dispatch(receiveRatings(ratings)));
};

export const addRating = (book_id, rating) => dispatch => {
  return RatingApiUtil.addRating(book_id, rating).then(rating => dispatch(receiveRating(rating)));
};

export const updateRating = (book_id, ratingId, rating) => dispatch => {
  return RatingApiUtil.updateRating(book_id, ratingId, rating).then(rating => dispatch(receiveRating(rating)));
};
