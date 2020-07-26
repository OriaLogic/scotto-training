import React from "react";

export default class Todo extends React.Component {
  state = {
    editedTodoName: this.props.todo.name
  };

  render() {
    const {
      todo,
      editing,
      toggleTodoActivation,
      deleteTodo,
      editTodo,
      updateTodo,
      stopEditTodo
    } = this.props;
    const { editedTodoName } = this.state;

    return !editing ? (
      <span>
        <span
          style={{
            textDecoration: todo.active ? "none" : "line-through"
          }}
          onClick={() => toggleTodoActivation(todo)}
        >
          {todo.name}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
        <button onClick={() => editTodo(todo)}>edit</button>
      </span>
    ) : (
      <span>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTodo(todo.id, editedTodoName);
          }}
        >
          <input
            autoFocus
            value={editedTodoName}
            onChange={e => this.setState({ editedTodoName: e.target.value })}
          />
          <button>Ok</button>
          <button type="button" onClick={stopEditTodo}>
            Cancel
          </button>
        </form>
      </span>
    );
  }
}
