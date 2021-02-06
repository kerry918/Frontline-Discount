import React from "react";
import "semantic-ui-css/semantic.min.css";
import Display from "./components/Display/Display";
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
  state = {
    businesses: null,
  };

  // Run as soon as App on the screen
  componentDidMount() {
    db.collection("Business")
      .get()
      .then((snapshot) => {
        const businesses = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          businesses.push(data);
        });
        this.setState({ businesses: businesses });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route
            exact
            path="/search/:business"
            component={BusinessPage}
          ></Route>
        </Router>
        {/* <div className="App">
          <h1>Frontline Deals</h1>
          {this.state.businesses && (
            <Display businesses={this.state.businesses} />
          )}
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
