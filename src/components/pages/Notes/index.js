import React from "react";
import { connect } from "react-redux";
import { values } from "lodash";
import { Route, Switch, Redirect } from "react-router-dom";

import NoteGroupNav from "./GroupNav";
import NoteNav from "./NoteNav";
import Note from "./Note";

export default function Notes({ history, location, match }) {
  return (
    <div className="notes-container">
      <NoteGroupNav history={history} location={location}>
        <Route
          path="/notes/:noteGroupName"
          render={({ match: noteGroupMatch }) => {
            return (
              <NoteNav
                location={location}
                currentGroupName={noteGroupMatch.params.noteGroupName}
                history={history}
              >
                <Route
                  path="/notes/:noteGroupName/:noteTitle"
                  component={Note}
                />
              </NoteNav>
            );
          }}
        />
      </NoteGroupNav>
    </div>
  );
}
