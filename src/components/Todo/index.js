import React from "react";
import EditionForm from "./EditionForm";
import DueDate from "./DueDate";
import Dropdown, { DropdownItem, DropdownDivider } from "../library/Dropdown";

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
      );
    }

    return (
      <span className="todo-container">
        <span
          style={{
            textDecoration: todo.active ? "none" : "line-through"
          }}
          onClick={() => this.props.onUpdate(todo.id, { active: !todo.active })}
        >
          {todo.name}
        </span>

        <DueDate dueDate={todo.dueDate} />

        <Dropdown
          trigger={
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          }
        >
          <DropdownItem onClick={() => this.props.onEdit(todo)}>
            Edit
          </DropdownItem>
          <DropdownItem onClick={() => this.props.onDelete(todo.id)}>
            Delete
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={() => this.props.onSnooze(todo, 1, "days")}>
            Snooze 1 day
          </DropdownItem>
          <DropdownItem onClick={() => this.props.onSnooze(todo, 3, "days")}>
            Snooze 3 day
          </DropdownItem>
          <DropdownItem onClick={() => this.props.onSnooze(todo, 1, "weeks")}>
            Snooze 1 week
          </DropdownItem>
          <DropdownItem onClick={() => this.props.onSnooze(todo, 2, "weeks")}>
            Snooze 2 weeks
          </DropdownItem>
        </Dropdown>
      </span>
    );
  }
}
