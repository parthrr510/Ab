import { SUBMIT_ANS, GET_ERROR } from "../types";

const initialState = {
  ans: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ANS:
      return {
        ...state,
        ans: null,
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
