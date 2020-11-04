import React from 'react';
import EditionForm from './EditionForm';
import DueDate from './DueDate';
import Dropdown, { DropdownItem, DropdownDivider } from '../library/Dropdown';

export default class Todo extends React.Component {

  render() {
    const { todo, editing, onUpdate, onCancelEdit, onEdit, onDelete, onSnooze } = this.props;

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
          <DropdownItem onClick={() => onDelete(todo.id)}>
            <span className="has-text-danger">Delete</span>
          </DropdownItem>
          <DropdownDivider/>
          <DropdownItem onClick={() => onSnooze(todo, 1)}>Snooze 1 day</DropdownItem>
          <DropdownItem onClick={() => onSnooze(todo, 3)}>Snooze 3 days</DropdownItem>
          <DropdownItem onClick={() => onSnooze(todo, 7)}>Snooze 1 week</DropdownItem>
          <DropdownItem onClick={() => onSnooze(todo, 21)}>Snooze 3 weeks</DropdownItem>
        </Dropdown>
      </span>
    )
  }
}
