import React, { useState } from 'react';
import { connect } from "react-redux";
import { NavLink, Route, Redirect } from 'react-router-dom';
import { values, keys } from "lodash";

import Button from "../../library/Button";

function NoteNav({ children, notes, addNote, groupId, updateNoteTitle, deleteNote, noteGroup }) {
  const [editedNoteId, setEditedNoteId] = useState(null);
  const [editedNoteTitle, setEditedNoteTitle] = useState(null);
  const onInputKeyDown = e => {
    if (e.keyCode === 13) {
      updateNoteTitle(editedNoteId, editedNoteTitle);
      setEditedNoteId(null)
    }

    if (e.keyCode === 27) {
      setEditedNoteId(null)
    }
  }

  const onDeleteNote = note => {
    if (window.confirm(`Are you sure you want to delete the note "${note.title}" ?`)) {
      deleteNote(note.id)
    }
  }

  if (!noteGroup) {
    return <Redirect to="/notes"/>
  }
  if (notes.length===0) {
    return(
      <div className="note-nav">
        <div className="no-note-placeholder">
          <section className="hero-is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{noteGroup.name}</h1>
                <h2 className="subtitle">This group does not contain any notes for now</h2>
                <Button
                  onClick={addNote}
                  additionalClassName="is-full-width"
                >
                  Add a note
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }

  return(
    <div className="note-nav">
      <div className="columns">
        <div className="column is-3">
          <aside className="menu">
            <ul className="menu-list">
              {notes.map(note => {
                return(
                    <li key={note.id} className="note">
                      {editedNoteId === note.id ? (
                        <input
                          className="input is-primary is-small"
                          autoFocus
                          value={editedNoteTitle}
                          onChange={e => setEditedNoteTitle(e.target.value)}
                          onKeyDown={onInputKeyDown}
                        />
                      ) : (
                        <NavLink to={`/notes/${note.groupId}/${note.id}`} >
                          {note.title}
                          <div className="actions">
                            <Button
                              additionalClassName="edit-button"
                              isText
                              color="white"
                              size="small"
                              onClick={() => {
                                setEditedNoteTitle(note.title);
                                setEditedNoteId(note.id);}
                              }
                            >
                              <span className="icon">
                                <i class="fas fa-edit"></i>
                              </span>
                            </Button>
                            <Button
                              additionalClassName="delete-button"
                              isText
                              color="white"
                              size="small"
                              onClick={() => onDeleteNote(note)}
                            >
                              <span className="icon has-text-danger">
                                <i className="fas fa-trash"></i>
                              </span>
                            </Button>
                          </div>
                        </NavLink>
                      )}
                    </li>
                )
              })}
            </ul>
            <Button
              size="small"
              color="white"
              style={{ bottom: -19 }}
              additionalClassName="is-fullwidth new-button"
              onClick={addNote}
            >
              New Note
            </Button>
          </aside>

        </div>
        <div className="column is-9">
          {children}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {

  return {
    notes: values(state.notes).filter(note => note.groupId === ownProps.groupId),
    noteGroup: state.noteGroups[ownProps.groupId]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    addNote: () => {
      dispatch({
        type: 'ADD_NOTE',
        payload: {
          groupId: ownProps.groupId
        }
      })
    },

    deleteNote: (id) => {
      dispatch({
        type: 'DELETE_NOTE',
        payload: {
          id
        }
      })
    },

    updateNoteTitle: (id, title) => {
      dispatch({
        type: 'UPDATE_NOTE',
        payload: {
          id,
          title
        }
      })
    }
  };
 };

export default connect(mapStateToProps, mapDispatchToProps)(NoteNav);
