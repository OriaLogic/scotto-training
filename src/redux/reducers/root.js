import { combineReducers } from "redux"
import todoLists from "./todoLists";
import userPreferences from "./userPreferences";
import notifications from "./notifications"
import notes from "./notes";
import noteGroup from "./noteGroup";

const combinedReducer = combineReducers({
  todoLists,
  userPreferences,
  notifications,
  notes,
  noteGroup
})

export default function rootReducer(state, action) {
  if (action.type === 'SAVE_DATA') {
    localStorage.setItem('dataState', JSON.stringify({
      todoLists: state.todoLists,
      userPreferences: state.userPreferences,
      notes: state.notes,
      noteGroup: state.noteGroup
    }))
    return state
  }

  return combinedReducer(state, action)

}
