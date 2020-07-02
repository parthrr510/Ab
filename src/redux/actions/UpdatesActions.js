import { GET_UPDATES, GET_ERROR } from "../types";
import axios from "axios";

export const getUpdates = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzA2MTE1LCJqdGkiOiJkZGVkNDFlM2MxZWQ0YzIzOTIzN2NiYjljMGM4YmFkYyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.2TpIhdxlmLavLQvHbz05_tA9sUeOMBILCedEkx9nWFo",
    },
  };
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/panel/questions/submit/",
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
