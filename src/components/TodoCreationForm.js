import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class TodoCreationForm extends React.Component {
  state = {
    todoName: ""
  }

  render() {
    return (
      <form
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
      </form>
    )
  }
}
