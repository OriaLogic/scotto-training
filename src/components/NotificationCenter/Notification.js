import React from "react";

export default function Notification({onDismiss}) {
    return (
      <div className="notification is-warning">
      <button className="delete" onClick={onDismiss} ></button>
      Todo is overdue!
      <button className="button is-white is-small">Deactivate</button>
      </div>
    )
}
