import React, { useState } from 'react';

export default function Dropdown() {
  return(
    <div className="dropdown is-hoverable">

      <div className="dropdown-trigger">
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>

      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Edit
          </a>
          <a className="dropdown-item">
            Delete
          </a>
        </div>
      </div>
    </div>
  )
}
