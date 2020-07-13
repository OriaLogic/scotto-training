import React from 'react';
import './TodoList.css';

function handleClick() {
  console.log(this)
}

class TodoList extends React.Component {

  state = {
    list: [
      { id: 1, name: 'Fumer des cannes', active: true },
      { id: 2, name: 'Coder cette shit', active: true },
      { id: 3, name: 'Nager avec des baleines', active: true },
      { id: 4, name: 'Rouler des cannes pour demain', active: true }
    ],
    newTaskName: "",
  }

  handleClick = () => {
    console.log(this)
  }

  deleteTodo(itemToDeleteId) {
    const newList = this.state.list.filter((item) => item.id !== itemToDeleteId)
    this.setState({ list: newList })
  }

  createNewTask() {
    this.setState({
      list: [
        ...this.state.list,
        { id: this.state.list[this.state.list.length - 1].id + 1, name: this.state.newTaskName, active: true }
      ],
      newTaskName: ""
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
                <button>edit</button>
                  <input/>
                  <button>Ok</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoList;
