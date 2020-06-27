import { UPDATE_RESOURCE } from "../types";

const initialState = {
  mscBits: null,
  food: null,
  technology: null,
  medicine: null,
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
    default:
      return state;
      break;
  }
};
