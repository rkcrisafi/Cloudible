export function fetchUser(id) {
  return $.ajax({
    method: "get",
    url: `/api/users/${id}`,
  });
}

export function updateUser (image, user_id) {
  return $.ajax({
    method: 'patch',
    url: `/api/users/${user_id}`,
    contentType: false,
    processData: false,
    data: image
  });
}
