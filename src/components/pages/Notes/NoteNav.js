import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { values, findKey } from "lodash";

import Button from "../../library/Button";

const NEW_NOTE_TITLE = "Nouvelle note";

function NoteNav({
  children,
  location,
  group,
  notes,
  addNote,
  deleteNote,
  updateNoteTitle
}) {
  const [editedNoteId, setEditedNoteId] = React.useState(null);
  const [editedNoteTitle, setEditedNoteTitle] = React.useState(null);

  const onInputKeyDown = e => {
    if (e.key === "Enter") {
      updateNoteTitle(editedNoteId, editedNoteTitle);
      setEditedNoteId(null);
    }

    if (e.key === "Escape") {
      setEditedNoteId(null);
    }
  };

  const onDeleteNote = note => {
    if (
      window.confirm(
        `Are you sure you want to delete the note "${note.title}" from group "${group.name}" ?`
      )
    ) {
      deleteNote(note.id);
    }
  };

  if (!group) {
    return <Redirect to="/notes" />;
  }

  if (
    [`/notes/${group.name}`, `/notes/${group.name}/`].includes(
      location.pathname
    ) &&
    notes.length > 0
  ) {
    return <Redirect to={`/notes/${group.name}/${notes[0].title}`} />;
  }

  if (notes.length === 0) {
    return (
      <div className="note-nav">
        <div className="no-note-placeholder">
          <section className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{group.name}</h1>
                <h2 className="subtitle">
                  You don't have any notes yet in this group
                </h2>
                <Button
                  onClick={() => addNote(group.id)}
                  additionalClassName="is-fullwidth"
                >
                  Add one!
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="columns note-nav" style={{ height: "calc(100% + 24px)" }}>
      <div className="column is-3">
        <aside className="menu">
          <ul className="menu-list">
            {notes.map(note => (
              <li key={note.id}>
                {editedNoteId === note.id ? (
                  <input
                    className="input is-small"
                    value={editedNoteTitle}
                    onChange={e => setEditedNoteTitle(e.target.value)}
                    onKeyDown={onInputKeyDown}
                    autoFocus
                  />
                ) : (
                  <NavLink
                    to={`/notes/${group.name}/${note.title}`}
                    activeClassName="is-active"
                  >
                    <div className="name">
                      <span>{note.title}</span>
                    </div>

                    <div className="actions">
                      <Button
                        color="white"
                        size="small"
                        onClick={() => {
                          setEditedNoteId(note.id);
                          setEditedNoteTitle(note.title);
                        }}
                      >
                        <span className="icon">
                          <i className="fas fa-edit"></i>
                        </span>
                      </Button>

                      <Button
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
            ))}
          </ul>

          <Button
            color="white"
            size="small"
            onClick={() => addNote(group.id)}
            additionalClassName="is-fullwidth new-button"
          >
            Nouvelle note
          </Button>
        </aside>
      </div>

      <div className="column is-9">{children}</div>
    </div>
  );
}

const mapStateToProps = ({ noteGroups, notes }, { currentGroupName }) => {
  const groupId = findKey(noteGroups, group => group.name === currentGroupName);
  const group = noteGroups[groupId];

  return {
    group: group,
    notes: values(notes).filter(note => note.groupId === groupId)
  };
};

const mapDispatchToProps = (dispatch, { currentGroupName, history }) => {
  return {
    addNote: groupId => {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          groupId,
          title: NEW_NOTE_TITLE
        }
      });
      history.push(`/notes/${currentGroupName}/${NEW_NOTE_TITLE}`);
    },
    deleteNote: id => {
      dispatch({
        type: "DELETE_NOTE",
        payload: {
          id
        }
      });
      history.push(`/notes/${currentGroupName}`);
    },
    updateNoteTitle: (id, title) => {
      dispatch({
        type: "UPDATE_NOTE",
        payload: {
          id,
          title
        }
      });
      history.push(`/notes/${currentGroupName}/${title}`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteNav);
