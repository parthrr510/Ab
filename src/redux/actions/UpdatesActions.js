import { GET_UPDATES, GET_ERROR } from "../types";
import axios from "axios";

export const getUpdates = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzc5NDgxLCJqdGkiOiI5YzUzY2NjZjhmMWI0Yzc3ODQxNWU2MmIyYWQ1Yjc5ZSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.YVvFehVP6VX7HaEDfo6cyVq6kvTO_mYciZ3EtUYyZgw",
    },
  };
  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/panel/questions/",
      config
    );

    dispatch({
      type: GET_UPDATES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
