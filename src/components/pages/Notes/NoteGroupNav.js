import React, { useState } from 'react';
import { connect } from "react-redux";
import { values, keys } from "lodash";
import { NavLink, Route } from 'react-router-dom';

import Button from "../../library/Button";


function NoteGroupNav({ children, noteGroups, addGroup, deleteGroup, updateGroupName, groupNotesCount }) {
  const [editedGroupId, setEditedGroupId] = useState(null);
  const [editedGroupName, setEditedGroupName] = useState(null);
  const onInputKeyDown = e => {
    if (e.keyCode === 13) {
      updateGroupName(editedGroupId, editedGroupName);
      setEditedGroupId(null)
    }

    if (e.keyCode === 27) {
      setEditedGroupId(null)
    }
  }

  const onDeleteGroup = noteGroup => {
    if (groupNotesCount[noteGroup.id]>0 && window.confirm(`Are you sure you want to delete the note group "${noteGroup.name}" ?
    It contains ${groupNotesCount[noteGroup.id]} that will also be deleted`)) {
      deleteGroup(noteGroup.id)
    } else if(groupNotesCount[noteGroup.id]==0){
      deleteGroup(noteGroup.id)
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
                          <span className="noteCount tag is-rounded">{groupNotesCount[noteGroup.id]}</span>
                          <div className="actions">
                            <Button
                              additionalClassName="edit-button"
                              isText
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
                              additionalClassName="delete-button"
                              isText
                              color="white"
                              size="small"
                              onClick={() => onDeleteGroup(noteGroup)}
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
  const groupNotesCount = { };
  keys(state.noteGroups).forEach((groupId) => {
    groupNotesCount[groupId] = 0
  })
  values(state.notes).forEach((note) => {
    groupNotesCount[note.groupId] += 1
  })
  return {
    noteGroups: values(state.noteGroups),
    groupNotesCount
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

    updateGroupName: (id, name) => {
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
