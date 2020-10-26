import React from "react";

export default function Notification() {
    return (
      <div className="notification is-warning">
      <button className="delete"></button>
      Todo is overdue!
      <button className="button is-white is-small">Deactivate</button>
      </div>
    )
}
