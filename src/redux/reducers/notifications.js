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
  },
  3:  {
    id: 3,
    active: true,
    todo: {
      id: 3,
      name: "plongée all day long",
      todoListId: 3
    }
  }

}

const notifications = (state = initialState, action) => {
  let id, todoListId;
  let todos, todo;

  switch (action.type) {
    case 'ADD_NOTIFICATION':
    id = uuidv4();
    return {
      ...state,
      [id]: {
        id,
        name: action.payload.name,
        active: true,
        todos: {}
      }
    }

    case 'DISMISS_NOTIFICATION':
    return {
      ...state,
      active: false
    }

    default:
      return state
  }

}

export default notifications;
