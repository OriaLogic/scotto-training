import React, { useState } from "react";

export function Dropdown({ trigger, children, align, style }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={
        "dropdown" +
        " " +
        (active ? "is-active" : "") +
        " " +
        (align === "right" ? "is-right" : "")
      }
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={style}
    >
      <div className="dropdown-trigger">{trigger}</div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
}

export function DropdownItem({ children, onClick, active }) {
  return (
    <a
      className={`dropdown-item ${active ? "is-active" : ""}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
