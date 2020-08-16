import { ADD_TODOLIST } from "../ActionTypes"
import { DELETE_TODOLIST } from "../ActionTypes"

export const addTodoList = (name) => {
  return {
    type: ADD_TODOLIST,
    payload: {
      name
    }
  }
}

export const deleteTodoList = (todoListId) => {
  return {
    type: DELETE_TODOLIST,
    payload: {
      todoListId
    }
  }
}
