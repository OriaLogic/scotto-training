import React from "react";

export default function NoteGroupNav({ children }) {
  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              <li><a>Notes</a></li>
              <li><a>Personal notes</a></li>
            </ul>
          </aside>
        </div>
        <div className="column is-10">
          {children}
        </div>
      </div>
    </div>
  )
}
