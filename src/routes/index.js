import React from "react";
import { Switch } from "react-router-dom";
import {Route} from "react-router-dom";
import LeaderBoard from "../panel/pages/LeaderBoard";
import Updates from "../panel/pages/Updates";
import Trading from "../panel/pages/Trading";
import Landing from "../landing page/Landing";
import SideNav from "../panel/SideNav";
import Login from "../login/login";
import MemberDetails from "../panel/pages/MemberDetails";
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/panel" component={SideNav} />
        <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />
        <PrivateRoute exact path="/updates" component={Updates} />
        <PrivateRoute exact path="/trading" component={Trading} />
        <PrivateRoute exact path="/memberdetails" component={MemberDetails} />
      </Switch>
    </div>
  );
};
export default Routes;
