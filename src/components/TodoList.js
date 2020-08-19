import React from "react";
import { values } from "lodash";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";
import { connect } from "react-redux";


class TodoList extends React.Component {
  state = {
    list: [],
    editingTaskId: null
  };

  deleteTodo = (taskToDeleteId) => {
    const newList = this.state.list.filter(task => task.id !== taskToDeleteId);
    this.setState({ list: newList });
  }

  editTask = (task) => {
    this.setState({
      editingTaskId: task.id,
    });
  }

  updateTask = (taskId, newName) => {
    this.setState({
      list: updateObjectInList(this.state.list, taskId, { name: newName }),
      editingTaskId: null
    });
  }

  toggleTask = (task) => {
    this.setState({
      list: updateObjectInList(this.state.list, task.id, { active: !task.active }),
      editingTaskId: null
    });
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
            {this.props.name} ({this.props.todos.filter(task => task.active).length})
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
            {this.props.todos.map(task => {
              return (
                <li key={task.id}>
                  <Todo
                    task={task}
                    editing={task.id === this.state.editingTaskId}
                    onEdit={this.editTask}
                    onCancelEdit={() => this.setState({editingTaskId: null})}
                    onToggle={this.toggleTask}
                    onDelete={this.props.deleteTodo}
                    onUpdate={this.updateTask}
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
    todos: values(state[ownProps.id].todos)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (newTodoName) => {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          newTodoName,
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
