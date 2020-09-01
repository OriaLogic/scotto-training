import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = JSON.parse(localStorage.getItem("dataState")) || {};

if (initialState) {
  for (const todoListId in initialState.todoLists) {
    for (const todoId in initialState.todoLists[todoListId].todos) {
      initialState.todoLists[todoListId].todos[todoId].dueDate = new Date(
        initialState.todoLists[todoListId].todos[todoId].dueDate
      );
    }
  }
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
