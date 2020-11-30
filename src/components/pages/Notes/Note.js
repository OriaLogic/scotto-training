import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { findKey } from "lodash";

function Note({ match, note, updateNoteContent }) {
  if (!note) {
    return <Redirect to={`/notes/`} />;
  }

  return (
    <div className="note">
      <textarea
        className="textarea"
        value={note.content}
        onChange={e => updateNoteContent(note.id, e.target.value)}
      />
    </div>
  );
}

const mapStateToProps = (state, { match }) => {
  const noteId = findKey(
    state.notes,
    note => note.title === match.params.noteTitle
  );
  const note = state.notes[noteId];

  return {
    note
  };
};
const mapDispatchToProps = dispatch => ({
  updateNoteContent: (id, content) =>
    dispatch({
      type: "UPDATE_NOTE",
      payload: {
        id,
        content
      }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
