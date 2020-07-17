import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  state = {
    list: [],
    newTaskName: "",
    editTaskName: "",
    editingTaskId: null
  }

  deleteTodo(taskToDeleteId) {
    const newList = this.state.list.filter((task) => task.id !== taskToDeleteId)
    this.setState({ list: newList })
  }

  createNewTask() {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name: this.state.newTaskName, active: true }],
        newTaskName: ""
      })
      return;
    }

    this.setState({
      list: [
        ...this.state.list,
        { id: this.state.list[this.state.list.length - 1].id + 1, name: this.state.newTaskName, active: true }
      ],
      newTaskName: ""
    })
  }

  editTask (task) {
    this.setState({
      editingTaskId: task.id,
      editTaskName: task.name
    })
  }

  updateTask(taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({ list: [
      ...list.slice(0, taskIndex),
    {
      ...task,
      name: this.state.editTaskName
    },
      ...list.slice(taskIndex + 1, list.length)
  ],
    editingTaskId: null
    })
  }

  toggleTask(taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({ list: [
      ...list.slice(0, taskIndex),
      {
        ...task,
        active: !task.active
      },
      ...list.slice(taskIndex + 1, list.length)
    ]})
  }

  render() {
    return (
      <div style={{
        height: 500
      }}>
        <h2>To Do List ({this.state.list.length}):</h2>
        <input style={{marginLeft: 20}} value={this.state.newTaskName} onChange={e => this.setState({ newTaskName: e.target.value })}/>
        <button onClick={() => this.createNewTask()}>Submit</button>
        <ul>
          {this.state.list.map((task) => {
            return (
              <li>
                {this.state.editingTaskId !== task.id ? (
                  <span>
                    <span
                      style={{ textDecoration: task.active ? 'none' : 'line-through' }}
                      onClick={() => this.toggleTask(task.id)}>
                      {task.name}
                    </span>
                    <button onClick={() => this.deleteTodo(task.id)}>delete</button>
                    <button onClick={() => this.editTask(task)}>edit</button>
                  </span>
                ) : (
                  <span>
                    <input value={this.state.editTaskName} onChange={e => this.setState({ editTaskName: e.target.value })} />
                    <button onClick={() => this.updateTask(task.id)}>Ok</button>
                    <button onClick={() => this.setState({ editingTaskId: null })}>Cancel</button>
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;
