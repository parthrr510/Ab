import React, { Component } from "react";
import "./App.css";
import Landing from "./landing page/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
