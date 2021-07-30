import React from "react";
import { NavLink, Route } from 'react-router-dom';
import { connect } from "react-redux";

import Button from "../library/Button";

class Header extends React.Component {
  render() {

    return(
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <NavLink className="navbar-item" to="/" activeClassName="is-active">
              <img src="/app-logo.png" height="28"/>
            </NavLink>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-start">
              <NavLink to="/Todos" className="navbar-item" activeClassName="is-active">Todos</NavLink>

              <NavLink to="/Notes" className="navbar-item" activeClassName="is-active">Notes</NavLink>

              <NavLink to="/Calendar" className="navbar-item" activeClassName="is-active">Calendar</NavLink>

          </div>

          <div className="navbar-end">
              <Button
                additionalClassName="save-data"
                onClick={this.props.saveData}
              >
                Save
              </Button>
          </div>

        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveData: () => dispatch({
      type: 'SAVE_DATA'
    })
  }
}

export default connect(null, mapDispatchToProps)(Header);
