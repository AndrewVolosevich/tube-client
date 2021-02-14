import { userActionTypes } from "./actions";
import { UserStore } from "~/interfaces/store-types";
import { extend } from "~/utils/extend";
import { AnyAction } from "redux";

const userInitialState: UserStore = {
  user: null,
};

export default function reducer(
  state: UserStore = userInitialState,
  action: AnyAction
) {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return extend(state, {
        user: action.payload,
      });

    default:
      return state;
  }
}
