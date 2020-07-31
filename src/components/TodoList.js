import React from "react";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    list: [],
    editingTaskId: null
  };

  deleteTodo = (taskToDeleteId) => {
    const newList = this.state.list.filter(task => task.id !== taskToDeleteId);
    this.setState({ list: newList });
  }

  createNewTask = (name) => {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name, active: true }],
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
        <header className="card-header">
          <p className="card-header-title">
            <h2>{this.props.name} ({this.state.list.filter(task => task.active).length})</h2>
          </p>
        </header>
        <div className="card-content">
          <TodoCreationForm onCreate={this.createNewTask}/>
          <ul>
            {this.state.list.map(task => {
              return (
                <li>
                  <Todo
                    task={task}
                    editing={task.id === this.state.editingTaskId}
                    onEdit={this.editTask}
                    onCancelEdit={() => this.setState({editingTaskId: null})}
                    onToggle={this.toggleTask}
                    onDelete={this.deleteTodo}
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

export default TodoList;
