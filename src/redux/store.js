import { createStore } from "redux";
import todoLists from "./reducers/todoLists";

const initialState = JSON.parse(localStorage.getItem("dataState"));
console.log(initialState);

const store = createStore(
  todoLists,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
