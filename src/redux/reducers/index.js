import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ResourceReducer from "./ResourceReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  resource: ResourceReducer,
  Auth: AuthReducer,
});
