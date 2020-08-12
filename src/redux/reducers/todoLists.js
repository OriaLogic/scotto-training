import { ADD_TODOLIST } from "../ActionTypes"
import { newId } from "../../util/id"

const initialState = {
  0: {
     id: 1,
     name: "General todolist",
     todos: {
       1: {
         id: 1,
         name: "First todo",
         active: true
       }
     }
  }
}

const todoLists = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      const id = newId()
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name,
          todos: {}
        }
      }
    default:
      return state
  }
}

export default todoLists;
