import { User } from "~/interfaces/api-types";

export const userActionTypes = {
  SET_USER: "SET_USER",
};

export const setUser = (user: User) => {
  return {
    type: userActionTypes.SET_USER,
    payload: user,
  };
};
