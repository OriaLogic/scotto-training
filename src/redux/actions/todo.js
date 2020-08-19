import { ADD_TODO } from "../ActionTypes"

export const addTodo = (newTodoName, todoListId) => {
  return {
    type: 'ADD_TODO',
    payload: {
      newTodoName,
      todoListId
    }
  }
}
