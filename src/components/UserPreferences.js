import React from "react";
import Button from "./library/Button";
import { connect } from "react-redux";
import { capitalize, startCase } from 'lodash';



class UserPreferences extends React.Component {
  render(){
    return (
      <div className="user-preferences">
        <h2 style={{ marginBottom: 10 }} className="title is-4">Preferences</h2>
        <div style={{ display: "flex" }}>
          <h5 className="subtitle is-5">Filters:</h5>
          { 
            ["ALL", "ACTIVE", "INACTIVE", "OVERDUE"].map(filterValue => (
              <Button
                onClick={() => this.props.changeFilter(filterValue)}
                disabled={this.props.filter === filterValue}
                style={{ marginLeft: 10 }}
                size="small">
                {capitalize(filterValue)}
              </Button>
            ))
          }
        </div>
        <div style={{ display: "flex" }}>
          <h5 className="subtitle is-5">Sort by:</h5>
          { 
            ["NAME", "LENGTH", "DUE_DATE"].map(sortByValue => (
              <Button
                onClick={() => this.props.changeSortBy(sortByValue)}
                disabled={this.props.sortBy === sortByValue}
                style={{ marginLeft: 10 }}
                size="small">
                {capitalize(startCase(sortByValue))}
              </Button>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    filter: state.userPreferences.filter,
    sortBy: state.userPreferences.sortBy
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeFilter: (filter) => dispatch({
      type: "CHANGE_FILTER",
      payload: {
        filter
      }
    }),

    changeSortBy: (sortBy) => dispatch({
      type: "CHANGE_SORT_BY",
      payload: {
        sortBy
      }
    })

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPreferences);
