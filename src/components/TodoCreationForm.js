import React from "react";
import DatePicker from "react-datepicker";
import Button from "./library/Button";

export default class TodoCreationForm extends React.Component {
  state = {
    todoName: "",
    dueDate: null
  }

  render() {
    const disabled = !this.state.todoName || !this.state.dueDate

    return (
      <form
        className="todo-creation-form"
        onSubmit={e => {
          e.preventDefault();
          if (disabled) return;
          this.props.onCreate(this.state.todoName, this.state.dueDate);
          this.setState({todoName: "", dueDate: null})
        }}

      >
        <input
          className="input is-primary is-small"
          autoFocus
          placeholder="Add a todo (hit Enter to validate)"
          value={this.state.todoName}
          onChange={e => this.setState({todoName: e.target.value})}
        />
        <DatePicker
          placeholderText="Click to select date"
          selected={this.state.dueDate}
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
