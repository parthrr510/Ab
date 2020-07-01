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
        country: action.payload.country,
        continent: action.payload.continent,
        flag: action.payload.flag,
        GDP: action.payload.GDP,
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
