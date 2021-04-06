import React, { useState } from 'react';
import classNames from 'classnames';

export default function Dropdown({trigger, children, align, style}) {

  const dropdownClassname = classNames("dropdown", "is-hoverable", {
    "is-right": align === "right"
  })

  return(
    <div className={dropdownClassname} >

      <div className="dropdown-trigger">
          {trigger}
      </div>

      <div className="dropdown-menu" id="dropdown-menu" role="menu" style={style}>

        <div className="dropdown-content">
          {children}
        </div>

      </div>

    </div>
  )
}

Dropdown.defaultProps = {
  align: "left"
};

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
