export const countActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

export const addCount = () => {
  return { type: countActionTypes.ADD };
};

export const subtractCount = () => {
  return { type: countActionTypes.SUBTRACT };
};
