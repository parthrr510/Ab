import { TRADING_COUNTRIES, GET_ERROR } from "../types";
import axios from "axios";

export const tradingCountries = (body) => async (dispatch) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNjg4MzY5LCJqdGkiOiIxN2MyMTI0MDI3OTU0Mjk4OThkMjg0ZjM0YTBmOTgzNSIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.oZ8tEKGK0G98KkYyqMVHrK53lrfIFWEWAbTJdYosYp0",
    },
  };
  console.log(body);
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/panel/trade/",
      config
    );

    dispatch({
      type: TRADING_COUNTRIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: err.response.data,
    });
  }
};

// export const tradingId = (id, trade) => async (dispatch) => {
//   const config = {
//     headers: {
//       Authorization:
//         "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkzNTM5ODkyLCJqdGkiOiIyMWZhYWI5ZjBkM2E0ZGQ2YjIyOGY3ZjVlZTEyZjkxNiIsInVzZXJfaWQiOiI2Zjg4ZDhiOC1kNTQ5LTQ3NzgtYjI4My0yZTAzZTYzOGQzY2IifQ.fz3ySlf_AAkx22LktmfukXcuRZ9HVbnRs8p_YNAKJkY",
//     },
//   };

//   try {
//     const res = await axios.post(
//       "http://127.0.0.1:8000/api/panel/trade/",
//       { trade: [id] },
//       config
//     );

//     dispatch({
//       type: TRADING_COUNTRIES,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: GET_ERROR,
//       payload: err.response.data,
//     });
//   }
// };
