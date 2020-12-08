import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";

export function NoteGroupNav({ children }) {
  return (
    <div className="group-nav">
      <div className="columns">
        <div className="column is-2">
          <aside class="menu">
            <ul class="menu-list">
              <li><a>Notes</a></li>
              <li><a>Personal notes</a></li>
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
    noteGroup: values(state.noteGroup)
  };
};

const mapDispatchToProps = () => { return{}; };

export default connect(mapStateToProps, mapDispatchToProps)(NoteGroupNav);
