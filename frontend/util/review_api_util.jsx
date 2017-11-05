export const fetchReviews = (bookId) => {
  return $.ajax({
    method: 'get',
    url: "api/reviews",
    data: { bookId }
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'post',
    url: "api/reviews",
    data: { review }
  });
};
