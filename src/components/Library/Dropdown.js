import React from "react";

export default function Dropdown({ trigger, children, style, align }) {
  return (
    <div
      className={`dropdown is-hoverable ${align === "right" ? "is-right" : ""}`}
    >
      <div className="dropdown-trigger">{trigger}</div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{children}</div>
      </div>
    </div>
  );
}

export function DropdownItem({ children, onClick }) {
  return (
    <a onClick={onClick} className="dropdown-item">
      {children}
    </a>
  );
}

export function DropdownDivider() {
  return <div className="dropdown-divider" />;
}
