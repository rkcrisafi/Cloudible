export const addRating = (user_id, book_id) => {
  return $.ajax({
    method: 'post',
    url: `/api/ratings`,
    data: {user_id, book_id}
  });
};

export const updateRating = (user_id, book_id) => {
  return $.ajax({
    method: 'patch',
    url: `api/ratings/${rating_id}`,
    data: {user_id, book_id}
  });
};

// export const fetchRatings = () => {
//   $.ajax({
//     method: 'get',
//     url: 'api/ratings'
//   });
// };
//
// export const fetchRating = id => {
//   $.ajax({
//     method: 'get',
//     url: `api/ratings/${id}`
//   });
// };
