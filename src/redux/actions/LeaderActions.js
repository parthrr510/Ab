import { LEADERBOARD_DATA, GET_ERROR } from "../types";
import axios from "axios";

export const leaderData = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNjMyMjA5LCJqdGkiOiJkZTAwNWU0M2E1ZmQ0NzcyOGI1Y2E1Y2U4MTlkZjgyYSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.Jzd_CPafRZwimc8aupjbIX8O_lHr6Kss94wBvwAdx-U",
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
