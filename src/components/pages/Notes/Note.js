import React from 'react';
import { connect } from "react-redux";

function Note({ note, updateNoteContent }) {

  return (
    <div className="note">
      <textarea className="textarea" placeholder="Start typing here"
      >
      </textarea>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.noteId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
      updateNoteContent: (id, content) => {
        dispatch({
          type: 'UPDATE_NOTE',
          payload: {
            id,
            content
          }
        })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
