import React from "react";
import Datepicker from "react-datepicker";

export default class EditionForm extends React.Component {
  state = {
    editTodoName: this.props.todo.name,
    editDueDate: this.props.todo.dueDate
   }

  render() {
    const { onUpdate, todo } = this.props;
    const { editTodoName, editDueDate } = this.state;
    const canSubmit = !!editTodoName && !!editDueDate;

    return (
      <form
        className="todo-edition-form"
        onSubmit={e => {
          e.preventDefault();
          if (!canSubmit) return;
          onUpdate(todo.id, {name: editTodoName, dueDate: editDueDate})
      }}
      >
        <input
          className="input is-primary is-small"
          autoFocus
          value={editTodoName}
          onChange={e => this.setState({ editTodoName: e.target.value })}
        />
        <Datepicker
          className="input is-primary is-small date-picker-input"
          placeholderText="Click to select a date"
          selected={this.state.editDueDate}
          onChange={newDate => this.setState({ editDueDate: newDate })}
        />
        <button
          type="submit"
          className="button is-primary is-small"
          disabled={ !canSubmit }
        >
          Ok
        </button>
        <button
          className="button is-danger is-light is-small"
          type="button"
          onClick={() => {
            this.props.onCancel()
            this.setState({ editTodoName: todo.name, editDueDate: todo.dueDate })
          }}
        >
          Cancel
        </button>
      </form>
    )
  }
}
