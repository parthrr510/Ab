import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  Auth: AuthReducer,
});
