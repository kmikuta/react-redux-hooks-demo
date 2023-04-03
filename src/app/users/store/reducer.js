import { USERS_LOADED, USER_SELECTED, USER_UNSELECTED } from "./actions";
import { arrayToObjectLiteral } from "../../util/arrays";

const initialState = {
  items: {},
  selectedUserIds: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_LOADED:
      return {
        ...state,
        items: arrayToObjectLiteral(action.payload.users),
        selectedUsers: [],
      };

    case USER_SELECTED:
      return {
        ...state,
        selectedUserIds: [...state.selectedUserIds, action.payload.userId],
      };

    case USER_UNSELECTED:
      return {
        ...state,
        selectedUserIds: state.selectedUserIds.filter(
          (id) => id !== action.payload.userId
        ),
      };

    default:
      return state;
  }
}
