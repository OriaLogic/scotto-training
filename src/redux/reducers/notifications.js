import { v4 as uuidv4 } from "uuid";

const initialState = {

  1: {
    id: 1,
    active: true,
    todo: {
      id: 1,
      name: "code all day long",
      todoListId: 1
    }
  },

  2:  {
    id: 2,
    active: false,
    todo: {
      id: 2,
      name: "pakaLolo all day long",
      todoListId: 2
    }
  }

}

const notifications = (state = initialState, action) => {
  let id, todo

  switch (action.type) {
    case 'ADD_NOTIFICATION':
      id = uuidv4();

      return {
        ...state,
        [id]: {
          id,
          active: true,
          todo: action.payload.todo
      }
    }

    case 'DISMISS_NOTIFICATION':
      id = action.payload.id

      return {
        ...state,
        [id]: {
          ...state[id],
          active: false
        }
      }

      default:
        return state
    }

}

export default notifications;
