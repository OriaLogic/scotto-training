import React from 'react';
import EditionForm from './EditionForm';
import DueDate from './DueDate';
import Dropdown, { DropdownItem } from '../library/Dropdown';

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



        <DueDate dueDate={todo.dueDate}/>

        <Dropdown onClick={() => this.props.onEdit(todo)}/>

      </span>
    )
  }
}
