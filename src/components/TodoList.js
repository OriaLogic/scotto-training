import React from "react";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    list: [],
    editTaskName: "",
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
      editTaskName: task.name
    });
  }

  updateTask = (taskId) => {
    this.setState({
      list: updateObjectInList(this.state.list, taskId, { name: this.state.editTaskName }),
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
        <h2>To Do List ({this.state.list.filter(task => task.active).length}):</h2>
        <TodoCreationForm onCreate={this.createNewTask}/>
        <ul>
          {this.state.list.map(task => {
            return (
              <li>
              <Todo />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
