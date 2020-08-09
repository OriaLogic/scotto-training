import React, { useState } from "react";
import { Dropdown, DropdownItem } from "../library/Dropdown";
import DueDate from "./DueDate";
import DatePicker from "react-datepicker";

export default function Todo({
  todo,
  onEdit,
  onDelete,
  onToggle,
  onUpdate,
  onCancelEdit,
  editing
}) {
  const [editTaskName, setEditTaskName] = useState(todo.name);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate);

  if (!editing) {
    return (
      <div className="todo">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 2,
            marginRight: 10
          }}
        >
          <div className="field" style={{ marginBottom: 0 }}>
            <input
              className="is-checkradio is-circle is-small"
              type="checkbox"
              checked={!todo.active}
              onChange={() => onToggle(todo)}
            />
            <label
              onClick={() => onToggle(todo)}
              style={{
                textDecoration: todo.active ? "none" : "line-through"
              }}
            >
              {todo.name}
            </label>
          </div>

          <DueDate dueDate={todo.dueDate} />
        </div>
        <Dropdown
          align="right"
          trigger={
            <span
              className="icon is-small"
              style={{ marginLeft: 0, marginTop: 6 }}
            >
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          }
        >
          <DropdownItem onClick={() => onEdit(todo)}>Edit</DropdownItem>
          <DropdownItem onClick={() => onDelete(todo.id)}>
            <span className="has-text-danger">Delete</span>
          </DropdownItem>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className="todo">
      <form
        onSubmit={e => {
          e.preventDefault();
          onUpdate({
            name: editTaskName,
            dueDate: editDueDate
          });
        }}
      >
        <div className="field">
          <input
            className="input is-primary is-small"
            autoFocus
            value={editTaskName}
            onChange={e => setEditTaskName(e.target.value)}
          />
        </div>

        <div className="field">
          <DatePicker
            selected={editDueDate}
            onChange={setEditDueDate}
            className="input is-small is-primary"
            placeholderText="Due date"
          />
        </div>

        <div>
          <button
            className="button is-danger is-light is-small"
            type="button"
            onClick={() => {
              onCancelEdit();
              setEditTaskName(todo.name);
              setEditDueDate(todo.dueDate);
            }}
          >
            Cancel
          </button>
          <button className="button is-primary is-small">Ok</button>
        </div>
      </form>
    </div>
  );
}
