import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";
import { NavLink, Route } from 'react-router-dom';

import Button from "../../library/Button";


function NoteGroupNav({ children, noteGroups, addGroup, deleteGroup, updateGroupName }) {
  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside className="menu">
            <ul className="menu-list">
              {noteGroups.map(noteGroup => {
                return(
                    <li>
                      <NavLink to={`/notes/noteGroups/${noteGroup.id}`} className="note-group">
                        {noteGroup.name}
                        <button
                          className="button is-text is-small"
                          style={{ marginRight: 11 }}
                          onClick={() => deleteGroup(noteGroup.id)}
                        >
                          <span className="icon has-text-danger">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                      </NavLink>
                    </li>
                )
              })}
            </ul>
            <Button
              size="small"
              color="white"
              additionalClassName="is-fullwidth new-button"
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
    addGroup: () => {

    },

    deleteGroup: (id) => {
      dispatch({
        type: 'DELETE_NOTE_GROUP',
        payload: {
          id
        }
      })
    },

    updateGroupName: () => {

    }
  };
 };

export default connect(mapStateToProps, mapDispatchToProps)(NoteGroupNav);
