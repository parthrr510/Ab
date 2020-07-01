import { TRADING_COUNTRIES, GET_ERROR } from "../types";

const initialState = {
  trade: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRADING_COUNTRIES:
      return {
        ...state,
        trade: null,
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
