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
    groupId: 0,
    content: "this too"
  }
}

const notes = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_NOTE':
      id: uuidv4();

      return {
        ...state,
        [id]: {
          id,
          title: action.payload.title,
          groupId: action.payload.groupId,
          content: action.payload.content
        }
      }

    case 'UDPATE_NOTE':
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