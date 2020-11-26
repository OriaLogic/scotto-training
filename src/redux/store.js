import { createStore } from "redux";
import rootReducer from './reducers/root';
import { getInitialState, afterStoreInitialization } from "./init";

const storedState = JSON.parse(localStorage.getItem("dataState"));
const todoListsState = storedState.todoLists;

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
  userPreferences: storedState.userPreferences,
  notifications: { }
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
            todo,
            todoListId
          }
        })
      }
    })
  })
}, 5000)


export default store;
