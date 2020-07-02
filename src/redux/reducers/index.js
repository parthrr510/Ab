import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ResourceReducer from "./ResourceReducer";
import LeaderReducer from "./LeaderReducer";
import NotificationsReducer from "./NotificationsReducer";
import RankingReducer from "./RankingReducer";
import TradingReducer from "./TradingReducer";
import QuesReducer from "./QuesReducer";
import SubmitansReducer from "./SubmitansReducer";
import UpdatesReducer from "./UpdatesReducer";
//combine multiple reducers
export default combineReducers({
  //reducers!!
  resource: ResourceReducer,
  team: LeaderReducer,
  notifications: NotificationsReducer,
  rankings: RankingReducer,
  trade: TradingReducer,
  questions: QuesReducer,
  ans: SubmitansReducer,
  updates: UpdatesReducer,
  Auth: AuthReducer,
});
