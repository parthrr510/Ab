import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ResourceReducer from "./ResourceReducer";
import LeaderReducer from "./LeaderReducer";
//combine multiple reducers
export default combineReducers({
  //reducers!!
  resource: ResourceReducer,
  leader: LeaderReducer,
  Auth: AuthReducer,
});
