import React from 'react';
import EditionForm from './EditionForm';
import DueDate from './DueDate';

export default class Todo extends React.Component {

  render() {
    const { todo } = this.props;

    if (this.props.editing) {
      return (
        <span className="todo-container">
          <EditionForm
            todo={todo}
            onUpdate={this.props.onUpdate}
            onCancel={this.props.onCancelEdit}
          />
        </span>
      )
    }

    return (
      <span className="todo-container">
        <span
          style={{
            textDecoration: todo.active ? "none" : "line-through"
          }}
          onClick={() => this.props.onUpdate(todo.id, { active: !todo.active})}
        >
          {todo.name}
        </span>
        <span className="button-container">
          <button
            onClick={() => this.props.onEdit(todo)}
            className="button is-primary is-outlined is-small"
          >
            edit
          </button>
          <button
            onClick={() => this.props.onDelete(todo.id)}
            className="button is-danger is-small is-outlined"
          >
            delete
          </button>
        </span>

        <DueDate dueDate={todo.dueDate}/>

      </span>
    )
  }
}
