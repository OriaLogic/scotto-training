import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
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
    )
  }
}
