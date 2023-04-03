import { UserListItem } from "./UserListItem";
import { ListWrapper } from "../../shared/ListWrapper";

export function UserList({ users, title, onUserSelection }) {
  return (
    <div className="width_128 height_200 margin-bottom_16">
      <h3>{title}</h3>
      <ListWrapper emptyState={users.length === 0}>
        <ul className="margin_0 padding-left_16">
          {users.map((user) => (
            <UserListItem
              key={user.id}
              {...user}
              onSelection={onUserSelection}
            />
          ))}
        </ul>
      </ListWrapper>
    </div>
  );
}
