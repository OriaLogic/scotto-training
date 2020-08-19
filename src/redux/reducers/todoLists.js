import { ADD_TODOLIST, DELETE_TODOLIST, ADD_TODO } from "../ActionTypes"
import { newId } from "../../util/id"

const initialState = {
  0: {
     id: 0,
     name: "General todolist",
     todos: {
       0: {
         id: 0,
         name: "First todo",
         active: true
       }
     }
  }
}

const todoLists = (state = initialState, action) => {
  let id;

  switch (action.type) {
    case ADD_TODOLIST:
      id = newId();
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name,
          todos: {}
        }
      };

    case DELETE_TODOLIST:
      delete state[action.payload.todoListId]
      return { ...state };

    case ADD_TODO:
      id = newId();

      return {
        ...state,
        [action.payload.todoListId]: {
          ...state[action.payload.todoListId],
          todos: {
            ...state[action.payload.todoListId].todos,
            [id]: {
              id,
              name: action.payload.newTodoName,
              active: true
            }
          }
        }
      }

    default:
      return state
  }
}

export default todoLists;
