import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { values, reduce } from "lodash";

import Button from "../../library/Button";

const NEW_GROUP_NAME = "Nouveau dossier";

function GroupNav({
  children,
  location,
  noteGroups,
  groupNotesCount,
  addGroup,
  updateGroupName,
  deleteGroup
}) {
  const [editedGroupId, setEditedGroupId] = React.useState(null);
  const [editedGroupName, setEditedGroupName] = React.useState(null);

  const onInputKeyDown = e => {
    if (e.key === "Enter") {
      updateGroupName(editedGroupId, editedGroupName);
      setEditedGroupId(null);
    }

    if (e.key === "Escape") {
      setEditedGroupId(null);
    }
  };

  const onDeleteGroup = group => {
    if (
      window.confirm(
        `Are you sure you want to delete the group "${
          group.name
        }" ? It contains ${
          groupNotesCount[group.id]
        } which will also be deleted`
      )
    ) {
      deleteGroup(group.id);
    }
  };

  if (["/notes", "/notes/"].includes(location.pathname)) {
    return <Redirect to={`/notes/${noteGroups[0].name}`} />;
  }

  return (
    <div className="columns group-nav">
      <div className="column is-2">
        <aside className="menu">
          <ul className="menu-list">
            {noteGroups.map(noteGroup => (
              <li key={noteGroup.id}>
                {editedGroupId === noteGroup.id ? (
                  <input
                    className="input is-small"
                    value={editedGroupName}
                    onChange={e => setEditedGroupName(e.target.value)}
                    onKeyDown={onInputKeyDown}
                    autoFocus
                  />
                ) : (
                  <NavLink
                    to={`/notes/${noteGroup.name}`}
                    activeClassName="is-active"
                  >
                    <div className="name">
                      <span>{noteGroup.name}</span>
                    </div>

                    <span className="tag is-rounded">
                      {groupNotesCount[noteGroup.id] || 0}
                    </span>

                    <div className="actions">
                      <Button
                        color="white"
                        size="small"
                        onClick={() => {
                          setEditedGroupId(noteGroup.id);
                          setEditedGroupName(noteGroup.name);
                        }}
                      >
                        <span className="icon">
                          <i className="fas fa-edit"></i>
                        </span>
                      </Button>

                      <Button
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
            ))}
          </ul>

          <Button
            color="white"
            size="small"
            onClick={addGroup}
            additionalClassName="is-fullwidth new-button"
          >
            Nouveau dossier
          </Button>
        </aside>
      </div>

      <div className="column is-10">{children}</div>
    </div>
  );
}

const mapStateToProps = ({ noteGroups, notes }) => ({
  noteGroups: values(noteGroups),
  groupNotesCount: reduce(
    values(notes),
    (result, note, noteId) => {
      if (!note.groupId) return result;
      result[note.groupId] = result[note.groupId] || 0;
      result[note.groupId] += 1;
      return result;
    },
    {}
  )
});

const mapDispatchToProps = (dispatch, { history }) => ({
  addGroup: () => {
    dispatch({
      type: "ADD_NOTE_GROUP",
      payload: {
        name: NEW_GROUP_NAME
      }
    });
    history.push(`/notes/${NEW_GROUP_NAME}`);
  },
  deleteGroup: id => {
    dispatch({
      type: "DELETE_NOTE_GROUP",
      payload: {
        id
      }
    });
    history.push("/notes");
  },
  updateGroupName: (id, name) => {
    dispatch({
      type: "UPDATE_NOTE_GROUP",
      payload: {
        id,
        name
      }
    });
    history.push(`/notes/${name}`);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupNav);
