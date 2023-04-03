const USERS_API_URL = "/db/users.json";

export function getAllUsers() {
  return fetch(USERS_API_URL)
    .then((res) => res.json())
    .then((users) => users.items);
}
