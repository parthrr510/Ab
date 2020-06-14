import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes";
import History from "./services/History";
import store from "./redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={History}>
            <Routes />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
