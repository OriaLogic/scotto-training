import React from "react";

export default class EditionForm extends React.Component {
  state = { editTodoName: this.props.todo.name }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onUpdate(this.props.todo.id, {name: this.state.editTodoName})
      }}
      >
        <input
          className="input is-primary is-small"
          autoFocus
          value={this.state.editTodoName}
          onChange={e => this.setState({ editTodoName: e.target.value })}
        />
        <button
          className="button is-primary is-small"
        >
          Ok
        </button>
        <button
          className="button is-danger is-light is-small"
          type="button"
          onClick={() => {
            this.props.onCancel()
            this.setState({ editTodoName: this.props.todo.name })
          }}
        >
          Cancel
        </button>
      </form>
    )
  }
}
