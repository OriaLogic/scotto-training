import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function TodoCreationForm({ onCreate }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const canSubmit = name !== "" && !!dueDate;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!canSubmit) return;
        onCreate(name, dueDate);
        setName("");
        setDueDate(null);
      }}
      style={{ display: "flex" }}
    >
      <input
        className="input is-primary is-small"
        autoFocus
        placeholder="Add a task (hit Enter to validate)"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <DatePicker
        selected={dueDate}
        onChange={setDueDate}
        className="input is-small is-primary"
        placeholderText="Due date"
      />
      <button
        className="button is-success is-small"
        type="submit"
        disabled={!canSubmit}
      >
        <span className="icon">
          <i className="fas fa-check-circle" />
        </span>
      </button>
    </form>
  );
}
