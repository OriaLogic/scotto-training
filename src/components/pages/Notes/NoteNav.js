import React, { useState } from 'react';

export default function Note( {children} ) {
  return(
    <div className="note-nav">
      <div className="columns">
        <div className="column is-3">
        </div>
        <div className="column is-9">
          {children}
        </div>
      </div>
    </div>
  )
}
