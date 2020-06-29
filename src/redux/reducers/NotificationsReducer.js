import { GET_NOTIFICATIONS, GET_ERROR } from "../types";

const initialState = {
  notification: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return {
        ...state,
        notification: action.payload,
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
