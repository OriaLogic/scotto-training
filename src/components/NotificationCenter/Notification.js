import React from "react";
import Dropdown, { DropdownItem } from '../library/Dropdown';

export default function Notification({onDismiss, onDeactivate, notification, onSnooze}) {
    return (
      <div className="notification is-warning">
        <button className="delete" onClick={onDismiss} ></button>
        {notification.todo.name} is overdue!
        <div className="notification-buttons">
          <button className="button is-white is-small" onClick={onDeactivate}>Mark as done</button>

          <button className="button snooze is-white is-small">
            <Dropdown
              trigger={
                (<React.Fragment>
                  <span className="icon is-small">
                    <i className="clockIcon fas fa-clock" />
                  </span>
                  <span className="icon is-small">
                    <i className="snoozeIcon fas fa-angle-down" aria-hidden="true" />
                  </span>
                </React.Fragment>)
              }
              style={{ marginLeft: -11 }}
            >
              <DropdownItem style={{ textAlign: 'left' }} onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 1)}>Snooze 1 day</DropdownItem>
              <DropdownItem style={{ textAlign: 'left' }} onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 3)}>Snooze 3 days</DropdownItem>
              <DropdownItem style={{ textAlign: 'left' }} onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 7)}>Snooze 1 week</DropdownItem>
              <DropdownItem style={{ textAlign: 'left' }} onClick={() => onSnooze(notification.id, notification.todoListId, notification.todo, 21)}>Snooze 3 weeks</DropdownItem>
            </Dropdown>
          </button>
        </div>
      </div>
    )
}
