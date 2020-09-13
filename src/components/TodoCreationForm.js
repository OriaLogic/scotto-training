import React from "react";
import DatePicker from "react-datepicker";

export default class TodoCreationForm extends React.Component {
  state = {
    todoName: "",
    dueDate: new Date()
  }

  handleDueDateChange = date => {
    this.setState({
      dueDate: date
    });
  };

  render() {
    return (
      <form
        className="todo-creation-form"
        onSubmit={e => {
          e.preventDefault();
          if (this.state.todoName === "") return;
          this.props.onCreate(this.state.todoName)
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
          selected={this.state.dueDate}
          onChange={this.handleDueDateChange}
          className="input date-picker-input is-primary is-small"
        />
      </form>
    )
  }
}
