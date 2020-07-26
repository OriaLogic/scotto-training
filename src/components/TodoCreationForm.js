import React from "react";

export default class TodoCreationForm extends React.Component {
  state = {
    taskName: ""
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onCreate(this.state.taskName);
          this.setState({ taskName: "" });
        }}
      >
        <div className="field has-addons">
          <div className="control">
            <input
              className="input transparent-input"
              autoFocus
              placeholder="Add a new todo (hit enter)"
              style={{ marginLeft: 20 }}
              value={this.state.taskName}
              onChange={e => this.setState({ taskName: e.target.value })}
            />
          </div>

          <button className="button" type="submit" style={{ display: "none" }}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
