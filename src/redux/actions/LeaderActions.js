import { LEADERBOARD_DATA, GET_ERROR } from "../types";
import axios from "axios";

export const leaderData = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNjk2NTQwLCJqdGkiOiIwNTdmYTMxZjA1NDk0NzUzODE3NjVjMzcyNmY3ZmVlZSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.wqLoYuK-RGN99pY5i7y7pxqvWjC3DUkwlp7SzpfdzcY",
    },
  };
  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/panel/my-team/",
      config
    );
    console.log(res.data);
    dispatch({
      type: LEADERBOARD_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
