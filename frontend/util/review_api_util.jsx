// export const fetchReviews = (bookId, ratingId) => {
//   return $.ajax({
//     method: 'get',
//     url: `api/books/${bookId}/ratings/${ratingId}/reviews`
//   });
// };

export const fetchBookReviews = (book_id) => {
  return $.ajax({
    return: 'get',
    url: `api/books/${book_id}/reviews`
  });
};

export const fetchUserReviews = (user_id) => {
  return $.ajax({
    return: 'get',
    url: `api/users/${user_id}/reviews`
  });
};

export const fetchReview = (book_id, rating_id, review) => {
  return $.ajax({
      method: 'get',
      url: `api/books/${book_id}/ratings/${rating_id}/reviews/${review.id}`
  });
};

export const createReview = (book_id, rating_id, review) => {
  return $.ajax({
    method: 'post',
    url: `api/books/${book_id}/ratings/${rating_id}/reviews`,
    data: { review }
  });
};
