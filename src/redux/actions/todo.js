import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constants/ActionTypes";

export const addTodo = (todoListId, name) => ({
  type: ADD_TODO,
  payload: { todoListId, name }
});

export const deleteTodo = (todoListId, id) => ({
  type: DELETE_TODO,
  payload: { todoListId, id }
});

export const editTodo = (todoListId, id, keysToUpdate) => ({
  type: EDIT_TODO,
  payload: {
    todoListId,
    id,
    ...keysToUpdate
  }
});
