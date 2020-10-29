import React from "react";

export default function Notification({onDismiss, onDeactivate}) {
    return (
      <div className="notification is-warning">
      <button className="delete" onClick={onDismiss} ></button>
      Todo is overdue!
      <button className="button is-white is-small" onClick={onDeactivate}>Deactivate</button>
      </div>
    )
}
