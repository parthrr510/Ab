import { UPDATE_RESOURCE, GET_ERROR } from "../types";
import axios from "axios";

export const updateResources = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNDQ4OTA1LCJqdGkiOiI4OTc5NDJhMTQ3MDQ0NzQ3YWU4NGE2ZGNjODk1NTIwOSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.J8QV7kxBhqJ0D95XuG5h1NxJEa4MiEq4MSuHf0-WCeM",
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
