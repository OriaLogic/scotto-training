import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";
import { NavLink, Route } from 'react-router-dom';

import Button from "../../library/Button";


function NoteGroupNav({ children, noteGroups, deleteNoteGroup }) {
  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside className="menu">
            <ul className="menu-list">
              {noteGroups.map(noteGroup => {
                return(
                    <li>
                      <NavLink to={`/notes/noteGroups/${noteGroup.id}`}>
                        {noteGroup.name}
                        <button
                          className="button is-text is-small"
                          style={{ marginRight: 11 }}
                          onClick={() => deleteNoteGroup(noteGroup.id)}
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
    deleteNoteGroup: (id) => {
      dispatch({
        type: 'DELETE_NOTE_GROUP',
        payload: {
          id
        }
      })
    }
  };
 };

export default connect(mapStateToProps, mapDispatchToProps)(NoteGroupNav);
