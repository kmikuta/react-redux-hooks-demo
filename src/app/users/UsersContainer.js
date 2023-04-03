import { UserList } from "./components/UserList";
import { useUsers } from "./hooks/users";

export function UsersContainer() {
  const {
    state: { users, selectedUsers },
    selectUser,
    unselectUser,
  } = useUsers();

  return (
    <div className="display_flex column-gap_32">
      <UserList
        users={users}
        title="Users"
        onUserSelection={(userId) => selectUser(userId)}
      />
      <UserList
        users={selectedUsers}
        title="Selected users"
        onUserSelection={(userId) => unselectUser(userId)}
      />
    </div>
  );
}
