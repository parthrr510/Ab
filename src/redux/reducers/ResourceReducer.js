import { UPDATE_RESOURCE, GET_ERROR } from "../types";

const initialState = {
  mscBits: null,
  food: null,
  technology: null,
  medicine: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESOURCE:
      return {
        ...state,
        mscBits: action.payload.mscBits,
        food: action.payload.food,
        technology: action.payload.technology,
        medicine: action.payload.medicine,
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
