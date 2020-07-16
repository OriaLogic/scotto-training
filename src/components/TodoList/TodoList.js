import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  state = {
    list: [ ],
    newTaskName: "",
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
      newTaskName: ""
    })
  }

  editTodo(taskId) {
    const { list } = this.state;
    const taskIndex = list.findIndex(task => task.id == taskId)
    const task = list[taskIndex]

    this.setState({list: [{
      ...list.slice(0, taskIndex),
      id: task.id,
      name: task.name,
      active: task.active,
      editing: !task.editing
    },
    ...list.slice(taskIndex + 1, list.length)
    ]})

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
                <span>
                <button>edit</button>
                  <input/>
                  <button>Ok</button>
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
