import React from "react";
import NoteGroupNav from "./NoteGroupNav";

export default function Notes({ props }) {
  return (
    <div className="notes-container">
      <NoteGroupNav>
        “The notes of the group”
      </NoteGroupNav>
    </div>
  )
}
