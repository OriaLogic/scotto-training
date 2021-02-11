import React, { useState } from 'react';

export default function NoteNav({ children }) {
  return(
    <div className="note-nav">
      <div className="columns">
        <div className="column is-3">
          Note list
        </div>
        <div className="column is-9">
          {children}
        </div>
      </div>
    </div>
  )
}
