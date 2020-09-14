import React from "react";
import DatePicker from "react-datepicker";
import Button from "./library/Button";

export default class TodoCreationForm extends React.Component {
  state = {
    todoName: "",
    dueDate: null
  }

  render() {
    return (
      <form
        className="todo-creation-form"
        onSubmit={e => {
          e.preventDefault();
          if (this.state.todoName === "") return;
          this.setState({todoName: ""})
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
          placeholderText="Click to select a date"
          selected={this.state.dueDate}
          onChange={newDate => this.setState({ dueDate: newDate })}
          className="input date-picker-input is-primary is-small"
        />
        <Button
          type="button"
          color="success"
          size="small"
          disabled={this.state.todoName === "" || this.state.dueDate === null}
          onClick={() => this.props.onCreate(this.state.todoName, this.state.dueDate)}
        >
          <span className="icon">
            <i className="fas fa-check-circle"></i>
          </span>
        </Button>
      </form>
    )
  }
}
