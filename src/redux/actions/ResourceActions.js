import { UPDATE_RESOURCE } from "../types";
import axios from "axios";

export const updateResources = () => {
  return async (dispatch) => {
    const res = await axios.get("/api/panel/resources/");

    dispatch({
      type: UPDATE_RESOURCE,
      payload: res.data,
    });
  };
};
