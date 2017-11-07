export const fetchReviews = (ratingId) => {
  return $.ajax({
    method: 'get',
    url: "api/reviews",
    data: { ratingId }
  });
};

export const createReview = review => {
  return $.ajax({
    method: 'post',
    url: "api/reviews",
    data: { review }
  });
};
