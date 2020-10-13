import React from "react";
import Button from "../library/Button";
import Dropdown, { DropdownItem } from "../library/Dropdown";

export default function Notification({
  notification,
  isLast,
  dismissNotification,
  deactivateTodo,
  snoozeTodo
}) {
  const { id, todo } = notification;
  const { id: todoId, name: todoName, todoListId } = todo;

  return (
    <div className="notification is-warning">
      <button
        className="delete"
        onClick={() => dismissNotification(id)}
      ></button>

      <div>
        <b>{todoName}</b> is overdue !
      </div>

      <div className="actions">
        <Button size="small" onClick={() => deactivateTodo(id, todo)}>
          Deactivate
        </Button>{" "}
        <Dropdown
          align="right"
          trigger={
            <Button color="default" outlined size="small">
              <span className="icon">
                <i className="fas fa-clock" aria-hidden="true"></i>
              </span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </Button>
          }
        >
          <DropdownItem onClick={() => snoozeTodo(id, todo, 1, "days")}>
            Snooze 1 day
          </DropdownItem>
          <DropdownItem onClick={() => snoozeTodo(id, todo, 3, "days")}>
            Snooze 3 days
          </DropdownItem>
          <DropdownItem onClick={() => snoozeTodo(id, todo, 1, "weeks")}>
            Snooze 1 week
          </DropdownItem>
          <DropdownItem onClick={() => snoozeTodo(id, todo, 2, "weeks")}>
            Snooze 2 weeks
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
}
