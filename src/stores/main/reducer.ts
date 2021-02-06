import { mainActionTypes } from "./actions";
import { MainStore } from "~/interfaces/store-types";
import { extend } from "~/utils/extend";
import { AnyAction } from "redux";

const mainInitialState: MainStore = {
  width: 0,
};

export default function reducer(
  state: MainStore = mainInitialState,
  action: AnyAction
) {
  switch (action.type) {
    case mainActionTypes.SET_WIDTH:
      return extend(state, {
        width: action.payload,
      });

    default:
      return state;
  }
}
