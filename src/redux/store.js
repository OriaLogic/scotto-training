import { createStore } from "redux"
import todoLists from "./reducers/todoLists"

const store = createStore(todoLists)

export default store
