import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
