import React from "react";
import Button from "./Library/Button";
import { connect } from "react-redux";

class UserPreferences extends React.Component {
  render(){
    return (
      <div className="user-preferences">
        <h2 style={{ marginBottom: 10 }} className="title is-4">Preferences</h2>
        <div style={{ display: "flex" }}>
          <h5 className="subtitle is-5">Filters:</h5>
          <Button onClick={() => this.props.changeFilter("ALL")} disabled={this.props.filter === "ALL"} style={{ marginLeft: 10 }} size="small">All</Button>
          <Button onClick={() => this.props.changeFilter("ACTIVE")} disabled={this.props.filter === "ACTIVE"} style={{ marginLeft: 10 }} size="small">Active</Button>
          <Button onClick={() => this.props.changeFilter("INACTIVE")} disabled={this.props.filter === "INACTIVE"} style={{ marginLeft: 10 }} size="small">Inactive</Button>
        </div>
        <div style={{ display: "flex" }}>
          <h5 className="subtitle is-5">Sort by:</h5>
          <Button onClick={() => this.props.changeSortBy("Name")} disabled={this.props.sortBy === "Name"} style={{ marginLeft: 10 }} size="small">Name</Button>
          <Button onClick={() => this.props.changeSortBy("Length")} disabled={this.props.sortBy === "Length"} style={{ marginLeft: 10 }} size="small">Length</Button>
          <Button onClick={() => this.props.changeSortBy("Number of Vowels")} disabled={this.props.sortBy === "Number of Vowels"} style={{ marginLeft: 10 }} size="small">Number of Vowels</Button>
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
