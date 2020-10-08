import React from 'react';
import EditionForm from './EditionForm';
import DueDate from './DueDate';
import Dropdown, { DropdownItem } from '../library/Dropdown';

export default class Todo extends React.Component {

  render() {
    const { todo, editing, onUpdate, onCancelEdit, onEdit, onDelete } = this.props;

    if (editing) {
      return (
        <span className="todo-container">
          <EditionForm
            todo={todo}
            onUpdate={onUpdate}
            onCancel={onCancelEdit}
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
          onClick={() => onUpdate(todo.id, { active: !todo.active})}
        >
          {todo.name}
        </span>



        <DueDate dueDate={todo.dueDate}/>

        <Dropdown>
          <DropdownItem onClick={() => onEdit(todo)}>Edit</DropdownItem>
          <DropdownItem onClick={() => onDelete(todo.id)}>Delete</DropdownItem>
        </Dropdown>

      </span>
    )
  }
}
