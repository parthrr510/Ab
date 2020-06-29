import { LEADERBOARD_DATA, GET_ERROR } from "../types";

const initialState = {
  country: null,
  continent: null,
  flag: null,
  GDP: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LEADERBOARD_DATA:
      return {
        ...state,
        country: action.payload[0].country,
        continent: action.payload[0].continent,
        flag: action.payload[0].flag,
        GDP: action.payload[0].GDP,
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
