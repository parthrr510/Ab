import { UPDATE_RESOURCE, GET_ERROR } from "../types";
import axios from "axios";

export const updateResources = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzE3NzI4LCJqdGkiOiIzNzYzZmRkMjU5YTM0YTc4OTk5NjFhYThhNzk1MTIxYyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.pwLNh8fL_YGiLUXRD-q6iN3Lgy0NZUMUCYJM9sByAuw",
    },
  };

  try {
    const res = await axios.get(
      "http://localhost:8000/api/panel/resources/",
      config
    );

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
