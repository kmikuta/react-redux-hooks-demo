export const USER_SELECTED = "@users/user-selected";
export const USER_UNSELECTED = "@users/user-unselected";
export const USERS_LOADED = "@users/users-loaded";

export function selectUser(userId) {
  return { type: USER_SELECTED, payload: { userId } };
}

export function unselectUser(userId) {
  return { type: USER_UNSELECTED, payload: { userId } };
}

export function loadUsers(users = []) {
  return { type: USERS_LOADED, payload: { users } };
}
