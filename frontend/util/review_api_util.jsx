// export const fetchReviews = (bookId, ratingId) => {
//   return $.ajax({
//     method: 'get',
//     url: `api/books/${bookId}/ratings/${ratingId}/reviews`
//   });
// };

export const fetchReview = (book_id, rating_id, id) => {
  return $.ajax({
      method: 'get',
      url: `api/books/${book_id}/ratings/${rating_id}/reviews/${id}`
  });
};

export const createReview = (review, book_id, rating_id) => {
  return $.ajax({
    method: 'post',
    url: `api/books/${book_id}/ratings/${rating_id}/reviews`,
    data: { review }
  });
};
