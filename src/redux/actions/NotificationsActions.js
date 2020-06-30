import { GET_NOTIFICATIONS, GET_ERROR } from "../types";
import axios from "axios";

export const getNotifications = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNTI1MTI2LCJqdGkiOiJkNDlmZWMzZTUzODQ0NTFkYWEwN2ZjMmRjYTkyZGI3NyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.DWD1tRIaC_YCA3dZaYBIo72bVPFnHK8aGKSRpPbf2Cs",
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
