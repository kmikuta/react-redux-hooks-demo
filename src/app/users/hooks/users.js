import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";

import { loadUsers, selectUser, unselectUser } from "../store/actions";
import { getAllUsers } from "../repository";
import { usersAndSelectedUsersSelector } from "../store/selectors";

export function useUsers() {
  const query = useQuery("users", getAllUsers, { retry: false });
  const { users, selectedUsers } = useSelector(usersAndSelectedUsersSelector);
  const dispatch = useDispatch();

  const loading = query.isFetching;
  const error = query.isError;

  useEffect(() => {
    if (query.isSuccess) {
      dispatch(loadUsers(query.data));
    }
  }, [dispatch, query.isSuccess, query.data]);

  return {
    state: { users, selectedUsers, loading, error },
    selectUser: (userId) => dispatch(selectUser(userId)),
    unselectUser: (userId) => dispatch(unselectUser(userId)),
  };
}
