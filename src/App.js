import React from "react";
import "semantic-ui-css/semantic.min.css";
import Display from "./components/Display/Display";
import MapMain from "./components/Map/WrappedMap";
import { db } from "./services/firebase";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";
import BusinessPage from "./components/BusinessPage";

class App extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/map" component={MapMain} />
          <Route
            exact
            path="/search/:business"
            component={BusinessPage}
          ></Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
