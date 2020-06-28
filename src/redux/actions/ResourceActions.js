import { UPDATE_RESOURCE, GET_ERROR } from "../types";
import axios from "axios";

export const updateResources = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzMzM0OTYxLCJqdGkiOiJmN2VkMTk4YTBlMDc0ODk3YTZlZTBmNzBlOGE3MmQ5YiIsInVzZXJfaWQiOiIzYTFjZGQ5Mi0yNGIwLTRkYWItYWMxOS0wMTdjMGI1Njg1ZjQifQ.UIPFXEWwqz2LAQEqd2zSfihcd11Z1yiHoWrYR3Jk-BU",
    },
  };
  try {
    const res = await axios.get("/api/panel/resources/", config);

    dispatch({
      type: UPDATE_RESOURCE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
