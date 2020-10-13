import React from "react";
import { values } from "lodash";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";
import { connect } from "react-redux";


class TodoList extends React.Component {
  state = {
    editingTodoId: null
  };

  editTodo = (todo) => {
    this.setState({
      editingTodoId: todo.id,
    });
  }

  updateTodo = (todoId, updatedKeysInTodo) => {
    this.props.updateTodo(todoId, updatedKeysInTodo);
    this.setState({
      editingTodoId: null
    });
  }

  getFilteredAndSortedTodos = () => {
    const filteredTodos = this.props.todos.filter(todo => {
      switch (this.props.filter) {
        case 'ALL': return true
        case 'ACTIVE': return todo.active === true
        case 'INACTIVE': return todo.active === false
      }
    });

    const sortByNameFunction = (todo1, todo2) => {
      if (todo1.name < todo2.name)
        return -1;
      if (todo1.name > todo2.name)
        return 1;
      return 0;
    };

    const sortByLengthFunction = (todo1, todo2) => {
      if (todo1.name.length < todo2.name.length)
        return -1;
      if (todo1.name.length > todo2.name.length)
        return 1;
      return 0;
    };

    const sortByDueDate = (todo1, todo2) => {
      if (todo1.dueDate < todo2.dueDate)
        return -1;
      if (todo1.dueDate > todo2.dueDate)
        return 1;
      return 0;
    };

    const filteredAndSortedTodos = filteredTodos.sort((todo1, todo2) => {
        if (this.props.sortBy === 'NAME') return sortByNameFunction(todo1, todo2);
        if (this.props.sortBy === 'LENGTH') return sortByLengthFunction(todo1, todo2);
        if (this.props.sortBy === 'DUE_DATE') return sortByDueDate(todo1, todo2)
    })

    return filteredAndSortedTodos
  }

  render() {
    return (
      <div
        className="TodoList"
        style={{
          height: 500
        }}
      >
        <div className="card">
        <header
          className="card-header"
          style={{ alignItems: 'center' }}
        >
          <p className="card-header-title">
            {this.props.name} ({this.props.todos.filter(todo => todo.active).length})
          </p>
          <button
            className="button is-text is-small"
            style={{ marginRight: 11 }}
            onClick={() => this.props.onDelete(this.props.id)}
          >
            <span className="icon has-text-danger">
              <i className="fas fa-trash"></i>
            </span>
          </button>
        </header>
        <div className="card-content">
          <TodoCreationForm onCreate={this.props.addTodo}/>
          <ul>
            {this.getFilteredAndSortedTodos().map(todo => {
              return (
                <li key={todo.id}>
                  <Todo
                    todo={todo}
                    editing={todo.id === this.state.editingTodoId}
                    onEdit={this.editTodo}
                    onCancelEdit={() => this.setState({editingTodoId: null})}
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
    filter: state.userPreferences.filter,
    sortBy: state.userPreferences.sortBy
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (newTodoName, dueDate) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          newTodoName,
          dueDate,
          todoListId: ownProps.id
        }
      })
    },

    deleteTodo: (todoId) => {
      dispatch({
        type: 'DELETE_TODO',
        payload: {
          todoId,
          todoListId: ownProps.id
        }
      })
    },

    updateTodo: (todoId, updatedKeysInTodo) => {
      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoId,
          updatedKeysInTodo,
          todoListId: ownProps.id
        }
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
