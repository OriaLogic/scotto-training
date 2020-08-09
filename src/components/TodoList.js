import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";

import {
  deleteTodoList,
  addTodo,
  deleteTodo,
  editTodo
} from "../redux/actions";

import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    editingTaskId: null
  };

  editTask = task => {
    this.setState({
      editingTaskId: task.id
    });
  };

  render() {
    const {
      todos,
      todoList,
      deleteTodoList,
      createTodo,
      deleteTodo,
      updateTodo
    } = this.props;

    console.log(todoList, todos);
    return (
      <div
        className="TodoList"
        style={{
          height: 500
        }}
      >
        <div className="card">
          <header className="card-header">
            <p
              className="card-header-title"
              style={{ justifyContent: "space-between" }}
            >
              {todoList.name} ({todos.filter(task => task.active).length})
              <button
                className="button is-text"
                onClick={() => deleteTodoList(todoList.id)}
              >
                <span className="icon has-text-danger">
                  <i className="fas fa-trash" />
                </span>
              </button>
            </p>
          </header>
          <div className="card-content">
            <TodoCreationForm onCreate={createTodo} />
            <ul>
              {todos.map(todo => {
                return (
                  <li>
                    <Todo
                      todo={todo}
                      editing={todo.id === this.state.editingTaskId}
                      onEdit={this.editTask}
                      onCancelEdit={() =>
                        this.setState({ editingTaskId: null })
                      }
                      onToggle={() =>
                        updateTodo(todo.id, { active: !todo.active })
                      }
                      onDelete={deleteTodo}
                      onUpdate={updatedKeys => {
                        updateTodo(todo.id, updatedKeys);
                        this.setState({ editingTaskId: null });
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { todoList }) => ({
  todos: values(state.todoLists[todoList.id].todos)
});

const mapDispatchToProps = (dispatch, { todoList }) => ({
  deleteTodoList: () => dispatch(deleteTodoList(todoList.id)),
  createTodo: name => dispatch(addTodo(todoList.id, name)),
  deleteTodo: id => dispatch(deleteTodo(todoList.id, id)),
  updateTodo: (id, updatedKeys) =>
    dispatch(editTodo(todoList.id, id, updatedKeys))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
