import { v4 as uuidv4 } from "uuid";

const initialState = {
  0: {
    id: 0,
    title: "a not so dumb note",
    groupId: 0,
    content: "this is an interesting note"
  },

  1: {
    id: 1,
    title: "another not so dumb note",
    groupId: 1,
    content: "this too"
  }
}

const notes = (state = initialState, action) => {
  console.log("ACTION", action)
  switch (action.type) {

    case 'ADD_NOTE':
      const id = uuidv4();
      return {
        ...state,
        [id]: {
          id,
          title: "New note",
          groupId: action.payload.groupId
        }
      }

    case 'UPDATE_NOTE':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      }

    case 'DELETE_NOTE':
      delete state[action.payload.id]
      return { ...state }

    default:
      return state
  }
}

export default notes;
