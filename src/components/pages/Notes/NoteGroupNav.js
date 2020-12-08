import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";
import { NavLink, Route } from 'react-router-dom';


function NoteGroupNav({ children, noteGroups }) {
  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              {noteGroups.map(noteGroup => {
                return(
                  <li><NavLink to={`/notes/noteGroups/${noteGroup.id}`}>{noteGroup.name}</NavLink></li>
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

const mapDispatchToProps = () => { return{}; };

export default connect(mapStateToProps, mapDispatchToProps)(NoteGroupNav);
