import React from "react";

export default class Todo extends React.Component {
  state = { editTaskName: this.props.todo.name };

  render() {
    return !this.props.editing ? (
      <span>
        <span
          style={{
            textDecoration: this.props.todo.active ? "none" : "line-through"
          }}
          onClick={() => this.props.onToggle(this.props.todo)}
        >
          {this.props.todo.name}
        </span>
        <button
          onClick={() => this.props.onEdit(this.props.todo)}
          className="button is-primary is-outlined is-small"
        >
          edit
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.todo.id)}
          className="button is-danger is-small is-outlined"
        >
          delete
        </button>
      </span>
    ) : (
      <span>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onUpdate({
              name: this.state.editTaskName
            });
          }}
        >
          <input
            className="input is-primary is-small"
            autoFocus
            value={this.state.editTaskName}
            onChange={e => this.setState({ editTaskName: e.target.value })}
          />
          <button className="button is-primary is-small">Ok</button>
          <button
            className="button is-danger is-light is-small"
            type="button"
            onClick={() => {
              this.props.onCancelEdit();
              this.setState({ editTaskName: this.props.todo.name });
            }}
          >
            Cancel
          </button>
        </form>
      </span>
    );
  }
}
