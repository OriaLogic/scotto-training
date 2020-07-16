import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  state = {
    list: [],
    newTaskName: "",
    editTaskName: ""
  }

  deleteTodo(itemToDeleteId) {
    const newList = this.state.list.filter((item) => item.id !== itemToDeleteId)
    this.setState({ list: newList })
  }

  createNewTask() {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name: this.state.newTaskName, active: true, editing: false }],
        newTaskName: ""
      })
      return;
    }

    this.setState({
      list: [
        ...this.state.list,
        { id: this.state.list[this.state.list.length - 1].id + 1, name: this.state.newTaskName, active: true, editing: false}
      ],
      newTaskName: "",
      editTaskName: ""
    })
  }

  editTask (taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({ list: [
      ...list.slice(0, taskIndex),
      {
        ...task,
        editing: !task.editing
      },
      ...list.slice(taskIndex + 1, list.length)
    ]})
  }

  updateTask(taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({ list: [
      ...list.slice(0, taskIndex),
    { id: this.state.list[this.state.list.length - 1].id + 1, name: this.state.editTaskName, active: true, editing: false },
    ...list.slice(taskIndex + 1, list.length)
  ],
  editTaskName: ""
})
  }

  toggleTask(taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({ list: [
      ...list.slice(0, taskIndex),
      {
        id: task.id,
        name: task.name,
        active: !task.active,
        editing: task.editing
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
        <input value={this.state.newTaskName} onChange={e => this.setState({ newTaskName: e.target.value })}/>
        <button onClick={() => this.createNewTask()}>Submit</button>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li>
                <span
                  style={{ textDecoration: item.active ? 'none' : 'line-through' }}
                  onClick={() => this.toggleTask(item.id)}>
                  {item.name}
                </span>
                <button onClick={() => this.deleteTodo(item.id)}>delete</button>
                  <button onClick={() => this.editTask(item.id)}>edit</button>
                  <span style={{ display: item.editing ? 'inline' : 'none' }}>
                  <input value={this.state.editTaskName} onChange={e => this.setState({ editTaskName: e.target.value })} />
                  <button onClick={() => this.updateTask(item.id)}>Ok</button>
                  </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;
