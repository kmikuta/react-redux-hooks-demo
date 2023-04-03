import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsers, selectUser, unselectUser } from "../store/actions";
import { getAllUsers } from "../repository";
import { usersAndSelectedUsersSelector } from "../store/selectors";

export function useUsers() {
  const { users, selectedUsers } = useSelector(usersAndSelectedUsersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUsers() {
      const users = await getAllUsers();
      dispatch(loadUsers(users));
    }
    fetchUsers();
  }, [dispatch]);

  return {
    state: { users, selectedUsers },
    selectUser: (userId) => dispatch(selectUser(userId)),
    unselectUser: (userId) => dispatch(unselectUser(userId)),
  };
}
