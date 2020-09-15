import React from 'react';
import moment from 'moment';
import EditionForm from './EditionForm';

export default class Todo extends React.Component {

  render() {
    if (this.props.editing) {
      return (
        <span className="todo-container">
          <EditionForm
            todo={this.props.todo}
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
          <span className="test">{moment(this.props.todo.dueDate).format("DD/MM/YYYY")}</span>
        </span>
      </span>
    )
  }
}
