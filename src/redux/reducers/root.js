import { combineReducers } from "redux"
import todoLists from "./todoLists";
import userPreferences from "./userPreferences";
import notifications from "./notifications"
import notes from "./notes";
import noteGroups from "./noteGroups";

const combinedReducer = combineReducers({
  todoLists,
  userPreferences,
  notifications,
  notes,
  noteGroups
})

export default function rootReducer(state, action) {
  if (action.type === 'SAVE_DATA') {
    localStorage.setItem('dataState', JSON.stringify({
      todoLists: state.todoLists,
      userPreferences: state.userPreferences,
      notes: state.notes,
      noteGroups: state.noteGroups
    }))
    return state
  }

  return combinedReducer(state, action)

}
