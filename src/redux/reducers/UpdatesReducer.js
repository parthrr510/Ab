import { GET_UPDATES, GET_ERROR } from "../types";

const initialState = {
  updates: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPDATES:
      return {
        ...state,
        updates: action.payload,
      };
    case GET_ERROR:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
