import React from "react";
import { connect } from "react-redux";
import { values, sortBy, camelCase } from "lodash";

import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    editingTaskId: null
  };

  editTask = todo => {
    this.setState({
      editingTaskId: todo.id
    });
  };

  updateTodo = (todoId, updatedKeysInTodo) => {
    this.props.updateTodo(todoId, updatedKeysInTodo);
    this.setState({
      editingTaskId: null
    });
  };

  deleteTodoList = () => {
    if (window.confirm("Are you sure you want to delete this todo list ?")) {
      this.props.onDelete(this.props.id);
    }
  };

  todos = () => {
    const { todos, preferences } = this.props;
    const { filter, sortByDirection, sortByField } = preferences;
    const fieldName = camelCase(sortByField);
    const multiple = sortByDirection === "ASC" ? 1 : -1;
    const filteredTodos =
      filter === "ALL"
        ? todos
        : todos.filter(todo => todo.active === (filter === "ACTIVE"));
    return sortBy(filteredTodos, todo => multiple * todo[fieldName]);
  };

  render() {
    const {
      todos,
      todoList,
      createTodo,
      deleteTodo,
      updateTodo,
      preferences
    } = this.props;
    const { filter, sortByDirection, sortByField } = preferences;

    return (
      <div
        className="TodoList"
        style={{
          height: 500
        }}
      >
        <div className="card">
          <header className="card-header" style={{ alignItems: "center" }}>
            <p className="card-header-title">
              {this.props.name} (
              {this.props.todos.filter(todo => todo.active).length})
            </p>
            <button
              className="button is-text is-small"
              style={{ marginRight: 11 }}
              onClick={() => this.deleteTodoList(this.props.id)}
            >
              <span className="icon has-text-danger">
                <i className="fas fa-trash"></i>
              </span>
            </button>
          </header>
          <div className="card-content">
            <TodoCreationForm onCreate={this.props.addTodo} />
            <ul>
              {this.todos().map(todo => {
                return (
                  <li key={todo.id}>
                    <Todo
                      todo={todo}
                      editing={todo.id === this.state.editingTaskId}
                      onEdit={this.editTask}
                      onCancelEdit={() =>
                        this.setState({ editingTaskId: null })
                      }
                      onDelete={this.props.deleteTodo}
                      onUpdate={this.updateTodo}
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

const mapStateToProps = (state, ownProps) => {
  return {
    todos: values(state.todoLists[ownProps.id].todos),
    preferences: state.userPreferences
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (newTodoName, dueDate) => {
      dispatch({
        type: "ADD_TODO",
        payload: {
          newTodoName,
          todoListId: ownProps.id,
          dueDate
        }
      });
    },

    deleteTodo: todoId => {
      dispatch({
        type: "DELETE_TODO",
        payload: {
          todoId,
          todoListId: ownProps.id
        }
      });
    },

    updateTodo: (todoId, updatedKeysInTodo) => {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          todoId,
          updatedKeysInTodo,
          todoListId: ownProps.id
        }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
