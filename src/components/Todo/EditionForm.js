import React from "react";
import Datepicker from "react-datepicker";

export default class EditionForm extends React.Component {
  state = {
    editTodoName: this.props.todo.name,
    editDueDate: this.props.todo.dueDate
   }

  render() {

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onUpdate(this.props.todo.id, {name: this.state.editTodoName, dueDate: this.state.editDueDate})
      }}
      >
        <input
          className="input is-primary is-small"
          autoFocus
          value={this.state.editTodoName}
          onChange={e => this.setState({ editTodoName: e.target.value })}
        />
        <Datepicker
          selected={this.state.editDueDate}
          onChange={newDate => this.setState({ editDueDate: newDate })}
        />
        <button
          type="submit"
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
