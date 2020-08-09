import { uuid } from "uuidv4";
import { omit } from "lodash";
import todos from "./todos";

import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  EDIT_TODOLIST,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from "../../constants/ActionTypes";

const initialTodoListId = uuid();
const initialTodoId = uuid();

const initialState = {
  [initialTodoListId]: {
    id: initialTodoListId,
    name: "General todolist",
    todos: {
      [initialTodoId]: {
        id: initialTodoId,
        name: "First todo",
        active: true
      }
    }
  }
};

const todoLists = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODOLIST:
      const newTodoListId = uuid();
      return {
        ...state,
        [newTodoListId]: {
          id: newTodoListId,
          name: payload.name,
          todos: {}
        }
      };
    case DELETE_TODOLIST:
      return omit(state, payload.id);
    case EDIT_TODOLIST:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload
        }
      };
    case ADD_TODO:
    case DELETE_TODO:
    case EDIT_TODO:
      return {
        ...state,
        [payload.todoListId]: {
          ...state[payload.todoListId],
          todos: todos(state[payload.todoListId].todos, action)
        }
      };
    default:
      return state;
  }
};

export default todoLists;
