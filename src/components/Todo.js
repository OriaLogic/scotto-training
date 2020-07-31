import React from 'react';

export default class Todo extends React.Component {
  state = { editTaskName: this.props.task.name }

  render() {
    return (
      !this.props.editing ? (
        <span>
          <span
            style={{
              textDecoration: this.props.task.active ? "none" : "line-through"
            }}
            onClick={() => this.props.onToggle(this.props.task)}
          >
            {this.props.task.name}
          </span>
          <button onClick={() => this.props.onDelete(this.props.task.id)}>
            delete
          </button>
          <button onClick={() => this.props.onEdit(this.props.task)}>edit</button>
        </span>
      ) : (
        <span>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.onUpdate(this.props.task.id, this.state.editTaskName)
          }}
          >
            <input
              autoFocus
              value={this.state.editTaskName}
              onChange={e => this.setState({ editTaskName: e.target.value })}
            />
            <button>Ok</button>
            <button
              type="button"
              onClick={() => {
                this.props.onCancelEdit()
                this.setState({ editTaskName: this.props.task.name })
              }}
            >
              Cancel
            </button>
          </form>
        </span>
      )
    )
  }
}
