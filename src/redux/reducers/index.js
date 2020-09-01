import { combineReducers } from "redux";

import todoLists from "./todolists";
import userPreferences from "./preferences";

const rootReducer = (state = {}, action) => {
  if (action.type === "SAVE_DATA") {
    localStorage.setItem("dataState", JSON.stringify(state));
    return state;
  }

  return {
    todoLists: todoLists(state.todoLists, action),
    userPreferences: userPreferences(state.preferences, action)
  };
};

export default rootReducer;
