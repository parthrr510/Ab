import { LEADERBOARD_DATA, GET_ERROR } from "../types";
import axios from "axios";

export const leaderData = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/panel/leaderboard/");
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
