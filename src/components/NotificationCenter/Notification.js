import React from "react";
import Dropdown, { DropdownItem } from '../library/Dropdown';

export default function Notification({onDismiss, onDeactivate, notification, onSnooze}) {
    return (
      <div className="notification is-warning">
        <button className="delete" onClick={onDismiss} ></button>
        {notification.todo.name} is overdue!
        <div className="notification-buttons">
          <button className="button is-white is-small" onClick={onDeactivate}>Mark as done</button>

          <Dropdown>
            <DropdownItem onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 1)}>Snooze 1 day</DropdownItem>
            <DropdownItem onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 3)}>Snooze 3 days</DropdownItem>
            <DropdownItem onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 7)}>Snooze 1 week</DropdownItem>
            <DropdownItem onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 21)}>Snooze 3 weeks</DropdownItem>
          </Dropdown>

        </div>
      </div>
    )
}
