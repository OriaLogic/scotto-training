import React from "react";
import DatePicker from "react-datepicker";
import Button from "./library/Button";

export default class TodoCreationForm extends React.Component {
  state = {
    todoName: "",
    dueDate: null
  }

  render() {
    const { onCreate } = this.props
    const { todoName, dueDate } = this.state;
    const disabled = !todoName || !dueDate;

    return (
      <form
        className="todo-creation-form"
        onSubmit={e => {
          e.preventDefault();
          if (disabled) return;
          onCreate(todoName, dueDate);
          this.setState({todoName: "", dueDate: null})
        }}

      >
        <input
          className="input is-primary is-small"
          autoFocus
          placeholder="Add a todo (hit Enter to validate)"
          value={todoName}
          onChange={e => this.setState({todoName: e.target.value})}
        />
        <DatePicker
          placeholderText="Click to select a date"
          selected={dueDate}
          onChange={newDate => this.setState({ dueDate: newDate })}
          className="input date-picker-input is-primary is-small"
        />
        <Button
          type="submit"
          color="success"
          size="small"
          disabled={disabled}
        >
          <span className="icon">
            <i className="fas fa-check-circle"></i>
          </span>
        </Button>
      </form>
    )
  }
}
