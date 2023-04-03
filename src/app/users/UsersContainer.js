import { FetchingWrapper } from "../shared/FetchingWrapper";
import { UserList } from "./components/UserList";
import { useUsers } from "./hooks/users";

export function UsersContainer() {
  const {
    state: { users, selectedUsers, loading, error },
    selectUser,
    unselectUser,
  } = useUsers();

  return (
    <div className="display_flex column-gap_32">
      <FetchingWrapper errorState={error} loadingState={loading}>
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
      </FetchingWrapper>
    </div>
  );
}
