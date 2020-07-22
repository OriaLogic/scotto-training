import React from "react";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";

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
                {this.state.editingTaskId !== task.id ? (
                  <span>
                    <span
                      style={{
                        textDecoration: task.active ? "none" : "line-through"
                      }}
                      onClick={() => this.toggleTask(task)}
                    >
                      {task.name}
                    </span>
                    <button onClick={() => this.deleteTodo(task.id)}>
                      delete
                    </button>
                    <button onClick={() => this.editTask(task)}>edit</button>
                  </span>
                ) : (
                  <span>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        this.updateTask(task.id)
                    }}
                    >
                      <input
                        autoFocus
                        value={this.state.editTaskName}
                        onChange={e =>
                          this.setState({ editTaskName: e.target.value })
                        }
                      />
                      <button>Ok</button>
                      <button
                        type="button"
                        onClick={() => this.setState({ editingTaskId: null })}
                      >
                        Cancel
                      </button>
                    </form>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
