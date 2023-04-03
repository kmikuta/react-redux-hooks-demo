import { combineReducers, createStore as createReduxStore } from "redux";

import { usersReducer } from "../app/users/store/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export function createStore() {
  return createReduxStore(rootReducer);
}
