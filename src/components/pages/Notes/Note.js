import React from 'react';
import { connect } from "react-redux";

function Note({ note }) {
  return (
    <div className="note">
      {note.content}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.noteId]
  }
}

export default connect(mapStateToProps)(Note);
