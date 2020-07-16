import React from "react";
import { updateObjectInList } from "../../util/arrays";
import "./TodoList.css";

let currentTaskId = 0;
const getNextTaskId = () => {
  currentTaskId += 1;
  return currentTaskId;
};

class TodoList extends React.Component {
  state = {
    list: [],
    newTaskName: "",
    editTaskName: "",
    editedTaskId: null
  };

  createNewTask() {
    const { list, newTaskName } = this.state;

    if (!newTaskName) return;

    const newTask = {
      id: getNextTaskId(),
      name: newTaskName,
      active: true
    };

    this.setState({
      list: [...list, newTask],
      newTaskName: ""
    });
  }

  deleteTask(taskToDeleteId) {
    const newList = this.state.list.filter(task => task.id !== taskToDeleteId);
    this.setState({ list: newList });
  }

  editTask(task) {
    this.setState({
      editedTaskId: task.id,
      editTaskName: task.name
    });
  }

  cancelEditTask(taskId) {
    this.setState({
      editedTaskId: null,
      editTaskName: ""
    });
  }

  updateTask(taskId) {
    const newList = updateObjectInList(this.state.list, taskId, {
      name: this.state.editTaskName
    });
    this.setState({
      list: newList,
      editTaskName: "",
      editedTaskId: null
    });
  }

  toggleTaskActivation(task) {
    const newList = updateObjectInList(this.state.list, task.id, {
      active: !task.active
    });
    this.setState({ list: newList });
  }

  render() {
    const { list, editedTaskId, editTaskName } = this.state;

    return (
      <div style={{ marginBottom: 500 }}>
        <h2>To Do List ({list.filter(task => task.active).length}):</h2>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.createNewTask();
          }}
        >
          <input
            value={this.state.newTaskName}
            onChange={e => this.setState({ newTaskName: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        <ul>
          {this.state.list.map(task => (
            <li key={task.id}>
              {task.id === editedTaskId ? (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.updateTask(task.id);
                  }}
                >
                  <input
                    style={{ margin: 0 }}
                    value={editTaskName}
                    onChange={e =>
                      this.setState({ editTaskName: e.target.value })
                    }
                  />
                  <button onClick={() => this.cancelEditTask(task.id)}>
                    Cancel
                  </button>
                  <button type="submit">Save</button>
                </form>
              ) : (
                <div>
                  <span
                    style={{
                      textDecoration: task.active ? "none" : "line-through"
                    }}
                    onClick={() => this.toggleTaskActivation(task)}
                  >
                    {task.name}
                  </span>
                  <button onClick={() => this.editTask(task)}>edit</button>
                  <button onClick={() => this.deleteTask(task.id)}>
                    delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
