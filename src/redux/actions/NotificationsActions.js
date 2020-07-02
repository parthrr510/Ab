import { GET_NOTIFICATIONS, GET_ERROR } from "../types";
import axios from "axios";

export const getNotifications = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzE3NzI4LCJqdGkiOiIzNzYzZmRkMjU5YTM0YTc4OTk5NjFhYThhNzk1MTIxYyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.pwLNh8fL_YGiLUXRD-q6iN3Lgy0NZUMUCYJM9sByAuw",
    },
  };

  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/panel/notifications/",
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
