import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECIEVE_REVIEW = 'RECEIVE_REVIEW';


// const receiveReviews = (reviews) => ({
//   type: RECEIVE_REVIEWS,
//   reviews
// });

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

// export const fetchReviews = (bookId) => dispatch => (
//     ReviewApiUtil.fechReviews(bookId).then(reviews => dispatch(receiveReviews(reviews)))
// );

export const fetchReview = (bookId, ratingId, review) => dispatch => (
  ReviewApiUtil.fetchReview(bookId, ratingId, review).then(review => dispatch(receiveReview(review)))
);

export const createReview = (bookId, ratingId, review) => dispatch => (
  ReviewApiUtil.createReview(bookId, ratingId, review).then(review => dispatch(receiveReview(review)))
);
