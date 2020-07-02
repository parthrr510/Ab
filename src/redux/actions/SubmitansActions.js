import { SUBMIT_ANS, GET_ERROR } from "../types";
import axios from "axios";

export const submitAns = (inputAns, update) => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzE3NzI4LCJqdGkiOiIzNzYzZmRkMjU5YTM0YTc4OTk5NjFhYThhNzk1MTIxYyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.pwLNh8fL_YGiLUXRD-q6iN3Lgy0NZUMUCYJM9sByAuw",
    },
  };
  console.log(inputAns, update);
  try {
    const res = await axios.post(
      `http://127.0.0.1:8000/api/panel/questions/submit/${update}/`,
      config,
      {
        submission: inputAns,
      }
    );

    dispatch({
      type: SUBMIT_ANS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
