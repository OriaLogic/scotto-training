import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./library/Button";
import NotificationCenter from "./NotificationCenter";
import Notes from "./pages/Notes";
import Todos from "./pages/Todos";
import AppLayout from "./AppLayout";

// Small comment to open the PR
export default class App extends React.Component {
  render() {
    return (
      <Router>

        <div className="App">
          <AppLayout />
          
          <NotificationCenter/>

          <div className="app-container">
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
          </div>

        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveData: () => dispatch({
      type: 'SAVE_DATA'
    })
  }
}
