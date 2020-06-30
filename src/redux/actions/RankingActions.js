import { GLOBAL_RANKINGS, GET_ERROR } from "../types";
import axios from "axios";

export const globalRankings = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/panel/leaderboard/");
    console.log(res.data);
    dispatch({
      type: GLOBAL_RANKINGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
