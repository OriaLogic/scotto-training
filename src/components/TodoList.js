import React from "react";

class TodoList extends React.Component {
  state = {
    list: [],
    newTaskName: "",
    editTaskName: "",
    editingTaskId: null
  };

  deleteTodo(taskToDeleteId) {
    const newList = this.state.list.filter(task => task.id !== taskToDeleteId);
    this.setState({ list: newList });
  }

  createNewTask() {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name: this.state.newTaskName, active: true }],
        newTaskName: ""
      });
      return;
    }

    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list[this.state.list.length - 1].id + 1,
          name: this.state.newTaskName,
          active: true
        }
      ],
      newTaskName: ""
    });
  }

  editTask(task) {
    this.setState({
      editingTaskId: task.id,
      editTaskName: task.name
    });
  }

  updateTaskInList(taskId, taskUpdateObject) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id === taskId);
    const task = list[taskIndex];

    return [
      ...list.slice(0, taskIndex),
      { ...task, ...taskUpdateObject },
      ...list.slice(taskIndex + 1, list.length)
    ];
  }

  updateTask(taskId) {
    this.setState({
      list: this.updateTaskInList(taskId, { name: this.state.editTaskName }),
      editingTaskId: null
    });
  }

  toggleTask(task) {
    this.setState({
      list: this.updateTaskInList(task.id, { active: !task.active }),
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
        <form
          onSubmit={e => {
            e.preventDefault();
            this.createNewTask()
          }}
        >
          <input
            style={{ marginLeft: 20 }}
            value={this.state.newTaskName}
            onChange={e => this.setState({ newTaskName: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
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
