import React from 'react';

export default class Todo extends React.Component {
  state = { editTodoName: this.props.todo.name }

  render() {
    return (
      !this.props.editing ? (
        <span className="todo-container">
          <span
            style={{
              textDecoration: this.props.todo.active ? "none" : "line-through"
            }}
            onClick={() => this.props.onUpdate(this.props.todo.id, { active: !this.props.todo.active})}
          >
            {this.props.todo.name}
          </span>
          <span className="button-container">
            <button
              onClick={() => this.props.onEdit(this.props.todo)}
              className="button is-primary is-outlined is-small"
            >
              edit
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.todo.id)}
              className="button is-danger is-small is-outlined"
            >
              delete
            </button>
          </span>
          <span className="due-date-container">
            <span className="test">{this.props.todo.dueDate}</span>
          </span>
        </span>
      ) : (
        <span>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.onUpdate(this.props.todo.id, {name: this.state.editTodoName})
          }}
          >
            <input
              className="input is-primary is-small"
              autoFocus
              value={this.state.editTodoName}
              onChange={e => this.setState({ editTodoName: e.target.value })}
            />
            <button
              className="button is-primary is-small"
            >
              Ok
            </button>
            <button
              className="button is-danger is-light is-small"
              type="button"
              onClick={() => {
                this.props.onCancelEdit()
                this.setState({ editTodoName: this.props.todo.name })
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
