import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  EDIT_TODOLIST
} from "../../constants/ActionTypes";

export const addTodoList = name => ({
  type: ADD_TODOLIST,
  payload: { name }
});

export const deleteTodoList = id => ({
  type: DELETE_TODOLIST,
  payload: { id }
});

export const editTodoList = (id, keysToUpdate) => ({
  type: EDIT_TODOLIST,
  payload: keysToUpdate
});
