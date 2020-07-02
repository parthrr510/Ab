import { GET_QUESTIONS, GET_ERROR } from "../types";
import axios from "axios";

export const getQuestions = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNzA0NDg3LCJqdGkiOiI5ZDQ0YTgzOGFmMDA0MGRlYmVkZWM1MDk3ZjBhZDcyYyIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.EeJe87xeQXoFIZ0UAaJ_7gLnz2989XbZkvwlplVzS74",
    },
  };

  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/panel/questions/",
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
