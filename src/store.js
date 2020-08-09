import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";

const middleWares = [];

if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  // middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__);
}

const store = createStore(rootReducer);
export default store;
