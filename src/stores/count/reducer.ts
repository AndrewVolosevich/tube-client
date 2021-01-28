import { countActionTypes } from "./actions";
import { CountStore } from "~/interfaces/store-types";
import { extend } from "~/utils/extend";
import { AnyAction } from "redux";

const countInitialState: CountStore = {
  count: 0,
};

export default function reducer(
  state: CountStore = countInitialState,
  action: AnyAction
) {
  switch (action.type) {
    case countActionTypes.ADD:
      return extend(state, {
        count: state.count + 1,
      });
    case countActionTypes.SUBTRACT:
      return extend(state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
}
