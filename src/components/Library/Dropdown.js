import React, { useState } from 'react';

export default function Dropdown({trigger, children, align}) {
  return(
    <div className="dropdown is-hoverable" >

      <div className="dropdown-trigger">
          {trigger}
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu">

        <div className="dropdown-content">
          {children}
        </div>

      </div>

    </div>
  )
}

export function DropdownItem({children, onClick, style}) {
  return(
    <a onClick={onClick} style={style} className="dropdown-item">{children}</a>
  )
}

export function DropdownDivider() {
  return(
    <a className="dropdown-divider"></a>
  )
}
