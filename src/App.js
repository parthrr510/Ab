import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import History from "./services/History";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={History}>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
