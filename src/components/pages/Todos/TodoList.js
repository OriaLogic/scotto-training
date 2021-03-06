import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";
import moment from 'moment';

import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";
import Button from "../../library/Button";

class TodoList extends React.Component {
  state = {
    editingTodoId: null
  };

  editTodo = (todo) => {
    this.setState({
      editingTodoId: todo.id,
    });
  }

  onDelete = () => {
    if (window.confirm("Are you sure?")) {
      this.props.onDelete(this.props.id)
    };
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
        case 'OVERDUE': return todo.active && todo.dueDate < new Date()
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
          <Button
            isText
            size="small"
            style={{ marginRight: 11 }}
            onClick={this.onDelete}
          >
            <span className="icon has-text-danger">
              <i className="fas fa-trash"></i>
            </span>
          </Button>
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
                    onSnooze={this.props.snoozeTodo}
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
    },

    snoozeTodo: (todo, numberOfDays) => {
      const newTodoDate = moment(todo.dueDate).add(numberOfDays, 'days').toDate()

      dispatch({
        type: 'UPDATE_TODO',
        payload: {
          todoId: todo.id,
          updatedKeysInTodo: { dueDate: newTodoDate },
          todoListId: ownProps.id
        }
      })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
