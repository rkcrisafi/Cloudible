export const signup = user => {
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: { user }
  });
};

export const login = user => {
  return $.ajax({
      method: 'post',
      url: '/api/session',
      data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};

export const add_book = (user_id, book_id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user_id}`,
    data: { type: 'add', book_id }
  });
};

export const delete_book = (user_id, book_id) => {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user_id}`,
    data: { type: 'remove', book_id }
  });
};

export const show_library = (user_id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${user_id}/books`
  });
};
