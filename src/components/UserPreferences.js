import React from "react";
import Button from "./Library/Button";

export default class UserPreferences extends React.Component {
  render(){
    return (
      <div className="user-preferences">
        <h2 style={{ marginBottom: 10 }} className="title is-4">Preferences</h2>
        <div style={{ display: "flex" }}>
          <h5 class="subtitle is-5">Filters:</h5>
          <Button disabled style={{ marginLeft: 10 }} size="small">All</Button>
          <Button style={{ marginLeft: 10 }} size="small">Active</Button>
          <Button style={{ marginLeft: 10 }} size="small">Inactive</Button>
        </div>
        <div style={{ display: "flex" }}>
          <h5 class="subtitle is-5">Sort by:</h5>
        </div>
      </div>
    )
  }
}
