import { createStore } from "redux";
import rootReducer from './reducers/root';
import { getInitialState, afterStoreInitialization } from "./init";

const initialState = getInitialState();

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

afterStoreInitialization(store);

export default store;
