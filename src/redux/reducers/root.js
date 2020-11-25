import { combineReducers } from "redux"
import todoLists from "./todoLists";
import userPreferences from "./userPreferences";
import notifications from "./notifications"

const combinedReducer = combineReducers({
  todoLists,
  userPreferences,
  notifications
})

export default function rootReducer(state, action) {
  if (action.type === 'SAVE_DATA') {
    localStorage.setItem('dataState', JSON.stringify({
      todoLists: state.todoLists,
      userPreferences: state.userPreferences
    }))
    return state
  }

  return combinedReducer(state, action)

}
