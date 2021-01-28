import { countActionTypes } from "./actions";
import { CountStore } from "../../interfaces/store-types";
import { extend } from "../../utils/extend";

const countInitialState: CountStore = {
  count: 0,
};

export default function reducer(
  state: CountStore = countInitialState,
  action: any
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
