import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeaderBoard from "./panel/pages/LeaderBoard";
import MSCBits from "./panel/pages/MSCBits";
import FoodResources from "./panel/pages/FoodResources";
import Dropdown from "./panel/pages/Dropdown";
import Login from "./panel/pages/Login";
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
            <Route exact path="/logout" component={Landing} />
            <Route exact path="/leaderboard" component={LeaderBoard} />
            <Route exact path="/mscbits" component={MSCBits} />
            <Route exact path="/food" component={FoodResources} />
            <Route exact path="/dropdown" component={Dropdown} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
