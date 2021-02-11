import React from "react";
import { Route } from 'react-router-dom';

import NoteGroupNav from "./NoteGroupNav";
import NoteNav from "./NoteNav";
import Note from "./Note";

export default function Notes({ props }) {
  return (
    <div className="notes-container">
      <NoteGroupNav>
        <Route
          path="/notes/:groupId"
          render={({ match }) => {
            return (
              <NoteNav
                match={match}
                groupId={match.params.groupId}
              >
                <Route
                  path='/notes/:groupId/:noteId'
                  component={Note}
                />
              </NoteNav>
            );
          }}
        />
      </NoteGroupNav>
    </div>
  )
}
