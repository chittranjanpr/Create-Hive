import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Login from "./pages/login";
import Home from "./pages/HomePage";
import PrivateRoute from "./component/PrivateRoute";

const history  = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
      <div>
          <Router history={history}>
              <Route exact path="/login" component={Login}  />
              <PrivateRoute exact path="/" component={Home}  />
              <PrivateRoute exact path="/home" component={Home}  />
          </Router>
      </div>
    );
  }
}

export default Routes;
