import React from "react";
import Button from "../../library/Button";

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
        <Button
          style={{ marginLeft: 10 }}
          type="submit"
          color="primary"
          disabled={this.state.newTodoListName === ""}
        >
          Submit
        </Button>
      </form>
    )
  }
}
