import React from "react";

export default class TodoListCreationForm extends React.Component {
  state = {
    newTodoListName: ""
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (this.state.newTodoListName === "") return;
          this.props.onCreate(this.state.newTodoListName);
          this.setState({newTodoListName: ""})
        }}
      >
        <input
          className="input is-primary is-normal"
          autoFocus
          placeholder="Add a TodoList"
          value={this.state.newTodoListName}
          onChange={e => this.setState({ newTodoListName: e.target.value })}
        />
        <button
          className="button is-normal is-primary"
          style={{ marginLeft: 10 }}
          type="submit"
          disabled={this.state.newTodoListName === ""}
        >
          Submit
        </button>
      </form>
    )
  }
}
