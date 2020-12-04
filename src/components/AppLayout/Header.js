import React from "react";
import { NavLink, Route } from 'react-router-dom';

export default class Header extends React.Component {
  render() {

    return(
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <NavLink to="/" activeClassName="is-active">
              <img src="/app-logo.png" height="28"/>
            </NavLink>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">

          <div className="navbar-start">
            <a className="navbar-item">
              <NavLink to="/Todos" activeClassName="is-active">Todos</NavLink>
            </a>

            <a className="navbar-item">
              <NavLink to="/Notes" activeClassName="is-active">Notes</NavLink>
            </a>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
