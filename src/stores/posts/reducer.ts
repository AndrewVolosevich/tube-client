import { countActionTypes } from "./actions";
import { PostStore } from "../../interfaces/store-types";
import { extend } from "../../utils/extend";
import { AnyAction } from "redux";

const countInitialState: PostStore = {
  posts: [],
};

export default function reducer(
  state: PostStore = countInitialState,
  action: AnyAction
) {
  switch (action.type) {
    case countActionTypes.FETCH:
      return extend(state, { posts: action.payload });

    default:
      return state;
  }
}
