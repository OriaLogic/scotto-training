import { createStore } from "redux"
import todoLists from "./reducers/todoLists"

const initialState = JSON.parse(localStorage.getItem("dataState"))
console.log(initialState);

const store = createStore(todoLists, initialState)

export default store
