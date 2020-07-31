import React from "react";

export default class TodoCreationForm extends React.Component {
  state = {
    taskName: ""
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (this.state.taskName === "") return;
          this.props.onCreate(this.state.taskName)
          this.setState({taskName: ""})
        }}
      >
        <input
          className="input is-primary is-small"
          autoFocus
          placeholder="Add a task"
          value={this.state.taskName}
          onChange={e => this.setState({taskName: e.target.value})}
        />
        <button className="button is-small is-primary" disabled={this.state.taskName === ""} type="submit">Submit</button>
      </form>
    )
  }
}
