import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import main from "./main/reducer";
import posts from "./posts/reducer";

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  mainStore: main,
  postStore: posts,
});

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore, { debug: true });
