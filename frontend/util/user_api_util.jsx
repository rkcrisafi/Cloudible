export function fetchUser(id) {
  return $.ajax({
    method: "get",
    url: `/api/users/${id}`,
  });
}
