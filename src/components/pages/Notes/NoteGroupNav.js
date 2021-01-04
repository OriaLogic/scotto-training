import React, { useState } from 'react';
import { connect } from "react-redux";
import { values } from "lodash";
import { NavLink, Route } from 'react-router-dom';

import Button from "../../library/Button";


function NoteGroupNav({ children, noteGroups, addGroup, deleteGroup, updateGroupName }) {
  const [editedGroupId, setEditedGroupId] = useState(null);
  const [editedGroupName, setEditedGroupName] = useState(null);
  const onInputKeyDown = e => {
    if (e.keyCode === 13) {
      updateGroupName(editedGroupName, editedGroupId);
      setEditedGroupId(null)
    }

    if (e.keyCode === 27) {
      setEditedGroupId(null)
    }
  }

  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside className="menu">
            <ul className="menu-list">
              {noteGroups.map(noteGroup => {
                return(
                    <li key={noteGroup.id} className="note-group">
                      {editedGroupId === noteGroup.id ? (
                        <input
                          className="input is-primary is-small"
                          autoFocus
                          value={editedGroupName}
                          onChange={e => setEditedGroupName(e.target.value)}
                          onKeyDown={onInputKeyDown}
                        />
                      ) : (
                        <NavLink to={`/notes/noteGroups/${noteGroup.id}`} >
                          {noteGroup.name}
                          <div className="actions">
                            <Button
                              additionalClassName="is-text edit-button"
                              color="white"
                              size="small"
                              onClick={() => {
                                setEditedGroupName(noteGroup.name);
                                setEditedGroupId(noteGroup.id);}
                              }
                            >
                              <span className="icon">
                                <i class="fas fa-edit"></i>
                              </span>
                            </Button>
                            <Button
                              additionalClassName="is-text delete-button"
                              color="white"
                              size="small"
                              onClick={() => deleteGroup(noteGroup.id)}
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
              additionalClassName="is-fullwidth new-button"
              onClick={addGroup}
            >
              New folder
            </Button>
          </aside>
        </div>
        <div className="column is-10">
          {children}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    noteGroups: values(state.noteGroups)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    addGroup: (name) => {
      dispatch({
        type: 'ADD_NOTE_GROUP',
        payload: {
          name: "New folder"
        }
      })
    },

    deleteGroup: (id) => {
      dispatch({
        type: 'DELETE_NOTE_GROUP',
        payload: {
          id
        }
      })
    },

    updateGroupName: (name, id) => {
      dispatch({
        type: 'UPDATE_NOTE_GROUP',
        payload: {
          id,
          name
        }
      })
    }
  };
 };

export default connect(mapStateToProps, mapDispatchToProps)(NoteGroupNav);
