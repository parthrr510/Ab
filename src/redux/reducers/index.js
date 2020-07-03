import { combineReducers } from "redux";
import auth, * as fromAuth from './auth.js'
import ResourceReducer from "./ResourceReducer";
import LeaderReducer from "./LeaderReducer";
import NotificationsReducer from "./NotificationsReducer";
import RankingReducer from "./RankingReducer";
import TradingReducer from "./TradingReducer";
import QuesReducer from "./QuesReducer";
import SubmitansReducer from "./SubmitansReducer";
import UpdatesReducer from "./UpdatesReducer";
import { connectRouter } from 'connected-react-router'
//combine multiple reducers
export default (history)=> combineReducers({
  //reducers!!
  resource: ResourceReducer,
  team: LeaderReducer,
  notifications: NotificationsReducer,
  rankings: RankingReducer,
  trade: TradingReducer,
  questions: QuesReducer,
  ans: SubmitansReducer,
  updates: UpdatesReducer,
  auth: auth,
  router: connectRouter(history)
});

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)

export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
