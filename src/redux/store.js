import { createStore, combineReducers } from "redux"
import todoLists from "./reducers/todoLists";
import userPreferences from "./reducers/userPreferences"

const initialState = {
  todoLists: JSON.parse(localStorage.getItem("dataState")),
  userPreferences: {
    filter: 'ACTIVE'
  }
}

const rootReducer = combineReducers({
  todoLists,
  userPreferences
})

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
