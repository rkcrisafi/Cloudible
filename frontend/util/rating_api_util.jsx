export const addRating = (book_id, rating) => {
  return $.ajax({
    method: 'post',
    url: `/api/books/${book_id}/ratings`,
    data: { rating }
  });
};

export const updateRating = (book_id, rating_id, rating) => {
  return $.ajax({
    method: 'patch',
    url: `api/books/${book_id}/ratings/${rating_id}`,
    data: { rating }
  });
};
