export const mainActionTypes = {
  SET_WIDTH: "SET_WIDTH",
};

export const setWidth = (width: number) => {
  return {
    type: mainActionTypes.SET_WIDTH,
    payload: width,
  };
};
