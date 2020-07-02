import { SUBMIT_ANS, GET_ERROR } from "../types";
import axios from "axios";

export const submitAns = (body) => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNjg4MzY5LCJqdGkiOiIxN2MyMTI0MDI3OTU0Mjk4OThkMjg0ZjM0YTBmOTgzNSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.oZ8tEKGK0G98KkYyqMVHrK53lrfIFWEWAbTJdYosYp0",
    },
  };

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/panel/questions/submit/1/",
      config
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
