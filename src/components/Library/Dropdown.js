import React, { useState } from 'react';

export default function Dropdown({trigger, children, style, align}) {
  return(
    <div className="dropdown is-hoverable">

      <div className="dropdown-trigger">
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>

      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <DropdownItem/>
        </div>
      </div>
    </div>
  )
}

export function DropdownItem({children, onClick, active}) {
  return(
    <div>
    <a onClick={onClick} className="dropdown-item">
      Edit
    </a>
    <a onClick={onClick} className="dropdown-item">
      Delete
    </a>
    </div>
  )
}
