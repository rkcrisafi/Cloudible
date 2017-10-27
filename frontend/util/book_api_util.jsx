export const addBook = (user_id, book_id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user_id}`,
    data: { type: 'add', book_id }
  });
};

export const deleteBook = (user_id, book_id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user_id}`,
    data: { type: 'remove', book_id }
  });
};

export const showLibrary = (user_id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}/books`
  });
};

export const fetchBooks = () => {
  return $.ajax({
    method: 'get',
    url: 'api/books'
  });
};

export const fetchBook = (book_id) => {
  return $.ajax({
    method: 'get',
    url: `api/books/${book_id}`
  });
};
