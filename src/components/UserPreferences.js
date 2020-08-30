import React from "react";
import Button from "./Library/Button";
import { connect } from "react-redux";

class UserPreferences extends React.Component {
  render(){
    return (
      <div className="user-preferences">
        <h2 style={{ marginBottom: 10 }} className="title is-4">Preferences</h2>
        <div style={{ display: "flex" }}>
          <h5 class="subtitle is-5">Filters:</h5>
          <Button disabled={this.props.filter === "ALL"} style={{ marginLeft: 10 }} size="small">All</Button>
          <Button disabled={this.props.filter === "ACTIVE"} style={{ marginLeft: 10 }} size="small">Active</Button>
          <Button disabled={this.props.filter === "INACTIVE"} style={{ marginLeft: 10 }} size="small">Inactive</Button>
        </div>
        <div style={{ display: "flex" }}>
          <h5 class="subtitle is-5">Sort by:</h5>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    filter: state.userPreferences.filter
  }
}

export default connect(mapStateToProps)(UserPreferences);
