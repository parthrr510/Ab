import { GLOBAL_RANKINGS, GET_ERROR } from "../types";

const initialState = {
  rankings: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_RANKINGS:
      return {
        ...state,
        rankings: action.payload,
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
