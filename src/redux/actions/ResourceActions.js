import { UPDATE_RESOURCE, GET_ERROR } from "../types";
import axios from "axios";

export const updateResources = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzMzUwNDQ3LCJqdGkiOiIyZWM0OGRlNjc2M2Y0YzI3Yjg2YmFmNDVjY2Q3ZTk0ZSIsInVzZXJfaWQiOiIzYTFjZGQ5Mi0yNGIwLTRkYWItYWMxOS0wMTdjMGI1Njg1ZjQifQ.Lt6tZZ2at-blOqE_mKss6Z54BywqblvVunfPU-sIOM8",
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:8000/api/panel/resources/",
      config
    );

    dispatch({
      type: UPDATE_RESOURCE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
