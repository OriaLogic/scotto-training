import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const middleWares = [];

const initialState = {
  todoLists: JSON.parse(localStorage.getItem("todoListData")) || {}
};

if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  // middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__);
}

const store = createStore(rootReducer, initialState);
export default store;
