import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeaderBoard from "./panel/pages/LeaderBoard";
import Updates from "./panel/pages/Updates";
import Trading from "./panel/pages/Trading";
import TradeRulebook from "./panel/pages/TradeRulebook";
import Discord from "./panel/pages/Discord";
import Landing from "./landing page/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./panel/SideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/panel" component={SideNav} />
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route exact path="/updtes" component={Updates} />
            <Route exact path="/trading" component={Trading} />
            <Route exact path="/traderulebook" component={TradeRulebook} />
            <Route exact path="/discord" component={Discord} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
