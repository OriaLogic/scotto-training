import React from "react";
import { connect } from "react-redux";
import { capitalize, replace } from "lodash";

import { Dropdown, DropdownItem } from "./library/Dropdown";

function Preferences({
  preferences,
  updateFilter,
  updateSortByField,
  updateSortByDirection
}) {
  const { filter, sortByField, sortByDirection } = preferences;

  return (
    <div className="Preferences">
      <h3 className="is-size-5" style={{ marginBottom: 10 }}>
        Preferences
      </h3>
      <div className="filters" style={{ marginBottom: 5 }}>
        <h4 className="is-size-6">Filters:</h4>
        {["ALL", "ACTIVE", "INACTIVE"].map(key => (
          <button
            className="button is-small"
            disabled={filter === key}
            onClick={() => key !== filter && updateFilter(key)}
            style={{ marginRight: 5 }}
          >
            {capitalize(key)}
          </button>
        ))}
      </div>

      <div className="sort" style={{ marginBottom: 5 }}>
        <h4 className="is-size-6">Sort by:</h4>
        <Dropdown
          style={{ marginRight: 5 }}
          trigger={
            <button className="button is-small">
              <span>{capitalize(replace(sortByField, "_", " "))}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          }
        >
          {["NAME", "DUE_DATE"].map(key => (
            <DropdownItem
              onClick={() => updateSortByField(key)}
              active={key === sortByField}
            >
              {capitalize(replace(key, "_", " "))}
            </DropdownItem>
          ))}
        </Dropdown>

        <Dropdown
          trigger={
            <button className="button is-small">
              <span>{capitalize(sortByDirection)}</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          }
        >
          {["ASC", "DESC"].map(key => (
            <DropdownItem
              onClick={() => updateSortByDirection(key)}
              active={key === sortByDirection}
            >
              {capitalize(key)}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  preferences: state.userPreferences
});

const mapDispatchToProps = dispatch => ({
  updateFilter: filter =>
    dispatch({
      type: "UPDATE_PREFERENCES",
      payload: { filter }
    }),
  updateSortByField: sortByField =>
    dispatch({
      type: "UPDATE_PREFERENCES",
      payload: { sortByField }
    }),
  updateSortByDirection: sortByDirection =>
    dispatch({
      type: "UPDATE_PREFERENCES",
      payload: { sortByDirection }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences);
