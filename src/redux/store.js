import { createStore, combineReducers } from "redux";
import moment from "moment";
import { values, flatten, sortBy } from "lodash";
import todoLists from "./reducers/todoLists";
import userPreferences from "./reducers/userPreferences";
import notifications from "./reducers/notifications";

const todoListsState = JSON.parse(localStorage.getItem("dataState"));

const allTodos = flatten(
  values(todoListsState).map(todoList => values(todoList.todos))
);
allTodos.forEach(todo => (todo.dueDate = new Date(todo.dueDate)));

const initialState = {
  todoLists: todoListsState,
  notifications: {},
  userPreferences: {
    filter: "ALL",
    sortBy: "NAME"
  }
};

const rootReducer = combineReducers({
  todoLists,
  userPreferences,
  notifications
});

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const now = moment();

setTimeout(() => {
  const overdueTodos = sortBy(
    allTodos.filter(
      todo => todo.active && moment(todo.dueDate).diff(now, "days") < 0
    ),
    "dueDate"
  );
  overdueTodos.forEach(todo =>
    store.dispatch({
      type: "ADD_NOTIFICATION",
      payload: { todo }
    })
  );
}, 3000);

export default store;
