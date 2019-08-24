import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import "./App.css";

// Page Components
import Landing from "./pages/Landing/";
import Blog from "./pages/Blog";

const Navbar = () => (
  <div className="Navbar">
    <h1>Second Saturday</h1>
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={withRouter(Landing)} />
            <Route exact path="/blog" component={withRouter(Blog)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
