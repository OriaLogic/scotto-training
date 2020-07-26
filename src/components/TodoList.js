import React from "react";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    list: [],
    editingTodoId: null
  };

  deleteTodo = todoToDeleteId => {
    const newList = this.state.list.filter(todo => todo.id !== todoToDeleteId);
    this.setState({ list: newList });
  };

  createNewTodo = name => {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name, active: true }]
      });
      return;
    }

    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list[this.state.list.length - 1].id + 1,
          name,
          active: true
        }
      ]
    });
  };

  editTodo = todo => {
    this.setState({
      editingTodoId: todo.id
    });
  };

  updateTodo = (todoId, name) => {
    this.setState({
      list: updateObjectInList(this.state.list, todoId, { name }),
      editingTodoId: null
    });
  };

  toggleTodo = todo => {
    this.setState({
      list: updateObjectInList(this.state.list, todo.id, {
        active: !todo.active
      }),
      editingTodoId: null
    });
  };

  render() {
    const { title, id, onDelete } = this.props;

    return (
      <div
        className="todo-list-card"
        style={{
          height: 500
        }}
      >
        <header className="card-header">
          <p className="card-header-title">
            {title} ({this.state.list.filter(todo => todo.active).length})
          </p>
          <button
            className="button is-text"
            onClick={() => onDelete(id)}
            style={{ marginTop: 4, marginRight: 4 }}
          >
            <span className="icon is-medium has-text-danger">
              <i className="fas fa-trash"></i>
            </span>
          </button>
        </header>

        <div className="card-content">
          <div style={{ marginBottom: 20 }}>
            <TodoCreationForm onCreate={this.createNewTodo} />
          </div>

          {this.state.list.length > 0 ? (
            <ul>
              {this.state.list.map(todo => {
                return (
                  <li>
                    <Todo
                      todo={todo}
                      editing={this.state.editingTodoId === todo.id}
                      todo={todo}
                      toggleTodoActivation={this.toggleTodo}
                      deleteTodo={this.deleteTodo}
                      editTodo={this.editTodo}
                      updateTodo={this.updateTodo}
                      stopEditTodo={() =>
                        this.setState({ editingTodoId: null })
                      }
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <h3 className="title is-3 placeholder">
              No task yet
              <span className="icon is-large">
                <i className="fas fa-sad-tear"></i>
              </span>
            </h3>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
