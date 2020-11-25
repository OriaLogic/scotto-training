import React from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./library/Button";
import NotificationCenter from "./NotificationCenter";
import Notes from "./pages/Notes";
import Todos from "./pages/Todos";

// Small comment to open the PR
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">

          <h1 className="main-title">Scotto TodoList App !</h1>
          <Button
            additionalClassName="save-data"
            onClick={this.props.saveData}
          >
            Save
          </Button>

          <NotificationCenter/>

          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
          </ul>
          </nav>

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

export default connect(null, mapDispatchToProps)(App);
