import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./library/Button";
import NotificationCenter from "./NotificationCenter";
import Notes from "./pages/Notes";
import Todos from "./pages/Todos";
import AppLayout from "./AppLayout";

// Small comment to open the PR
export default function App () {
    return (
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/">
              <Todos />
            </Route>
          </Switch>
        </AppLayout>
      </Router>
    );
}
