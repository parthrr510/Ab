import { COMPLICATED_STUFF } from "../types";

const defaultState = {
  user: null,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case COMPLICATED_STUFF:
      return {
        ...state,
        user: "piyaaaaaaaa",
      };
    default:
      return state;
  }
};
