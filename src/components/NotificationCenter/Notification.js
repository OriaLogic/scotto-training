import React from "react";
import Dropdown, { DropdownItem } from '../library/Dropdown';

export default function Notification({onDismiss, onDeactivate, notification}) {
    return (
      <div className="notification is-warning">
        <button className="delete" onClick={onDismiss} ></button>
        {notification.todo.name} is overdue!
        <div className="notification-buttons">
          <button className="button is-white is-small" onClick={onDeactivate}>Mark as done</button>

          <Dropdown>
            <DropdownItem onClick={() => console.log('snooze 1 day')}>Snooze 1 day</DropdownItem>
            <DropdownItem onClick={() => console.log('snooze 3 days')}>Snooze 3 days</DropdownItem>
            <DropdownItem onClick={() => console.log('snooze 1 week')}>Snooze 1 week</DropdownItem>
            <DropdownItem onClick={() => console.log('snooze 3 weeks')}>Snooze 3 weeks</DropdownItem>
          </Dropdown>

        </div>
      </div>
    )
}
