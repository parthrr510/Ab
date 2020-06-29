import { GET_NOTIFICATIONS, GET_ERROR } from "../types";
import axios from "axios";

export const getNotifications = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNDQ4OTA1LCJqdGkiOiI4OTc5NDJhMTQ3MDQ0NzQ3YWU4NGE2ZGNjODk1NTIwOSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.J8QV7kxBhqJ0D95XuG5h1NxJEa4MiEq4MSuHf0-WCeM",
    },
  };

  try {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/panel/notifications/",
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};
