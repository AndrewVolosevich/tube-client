import { Dispatch } from "redux";

export const countActionTypes = {
  FETCH: "FETCH",
};

export const fetchPosts = () => async (dispatch: Dispatch) => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => json.slice(0, 4));

  return dispatch({ type: countActionTypes.FETCH, payload: posts });
};
