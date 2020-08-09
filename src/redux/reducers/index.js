import { combineReducers } from "redux";

import todoLists from "./todolists";
import userPreferences from "./preferences";

export default combineReducers({
  todoLists,
  userPreferences
});
