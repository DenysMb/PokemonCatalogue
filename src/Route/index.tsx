import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "../Views";
import TopBar from "../Components/TopBar";

export default function () {
  return (
    <Fragment>
      <TopBar/>
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
