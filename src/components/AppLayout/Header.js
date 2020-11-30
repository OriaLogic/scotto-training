import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";

function Header({ saveData }) {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/todos">
          <img src="/logo-todos.png" height="28" />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/todos"
          >
            Todos
          </NavLink>

          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/notes"
          >
            Notes
          </NavLink>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-primary" onClick={saveData}>
              <strong>Save</strong>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveData: () =>
      dispatch({
        type: "SAVE_DATA"
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
