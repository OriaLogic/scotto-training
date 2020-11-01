import React from "react";

export default function Notification({onDismiss, onDeactivate, notification}) {
    return (
      <div className="notification is-warning">
        <button className="delete" onClick={onDismiss} ></button>
        {notification.todo.name} is overdue!
        <div className="notification-buttons">
          <button className="button is-white is-small" onClick={onDeactivate}>Deactivate</button>
        </div>
      </div>
    )
}
