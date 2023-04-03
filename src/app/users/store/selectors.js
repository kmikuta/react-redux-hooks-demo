import { objectToArray } from "../../util/objects";

const sortByName = (a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1);

export function usersAndSelectedUsersSelector({ users }) {
  const selectedIds = new Set(users.selectedUserIds);

  const selectedUsers = users.selectedUserIds
    .map((id) => users.items[id])
    .sort(sortByName);

  const filteredUsers = objectToArray(users.items).filter(
    (user) => !selectedIds.has(user.id)
  );

  return {
    users: filteredUsers,
    selectedUsers,
  };
}
