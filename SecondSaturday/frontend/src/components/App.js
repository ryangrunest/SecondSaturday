import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Landing from "./pages/Landing";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path={"/"} component={Landing} />
      </Router>
    );
  }
}

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
