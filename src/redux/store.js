import { createStore, combineReducers } from "redux"
import todoLists from "./reducers/todoLists";
import userPreferences from "./reducers/userPreferences";
import notifications from "./reducers/notifications"

const todoListsState = JSON.parse(localStorage.getItem("dataState"));

Object.keys(todoListsState).forEach(todoListId => {
  const todoList = todoListsState[todoListId];
  const todos = todoList.todos;

  Object.keys(todos).forEach(todoId => {
    const todo = todos[todoId];
    todo.dueDate = new Date(todo.dueDate);
  })
})

const initialState = {
  todoLists: todoListsState,
  userPreferences: {
    filter: "ALL",
    sortBy: "NAME"
  },
  notifications: { }
}

const rootReducer = combineReducers({
  todoLists,
  userPreferences,
  notifications
})

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
setTimeout(() => {
  Object.keys(todoListsState).forEach(todoListId => {
    const todoList = todoListsState[todoListId];
    const todos = todoList.todos;

    Object.keys(todos).forEach(todoId => {
      const todo = todos[todoId];
      if (todo.active && todo.dueDate < new Date()) {
        store.dispatch({
          type: 'ADD_NOTIFICATION',
          payload: {
            todo
          }
        })
      }
    })
  })
}, 5000)


export default store;
