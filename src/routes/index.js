import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import LeaderBoard from "../panel/pages/LeaderBoard";
import Updates from "../panel/pages/Updates";
import Trading from "../panel/pages/Trading";
import Discord from "../panel/pages/Discord";
import Landing from "../landing page/Landing";
import SideNav from "../panel/SideNav";
import Login from "../login/login";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/panel" component={SideNav} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
        <Route exact path="/updates" component={Updates} />
        <Route exact path="/trading" component={Trading} />

        <Route exact path="/discord" component={Discord} />
      </Switch>
    </div>
  );
};
export default Routes;
