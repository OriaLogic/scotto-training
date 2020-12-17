import { v4 as uuidv4 } from "uuid";

const initialState = {
  0: {
    id: 0,
    name: "Notes"
  },
  1: {
    id: 1,
    name: "Notes 2"
  }
};

const noteGroups = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_NOTE_GROUP':
      id = uuidv4();
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name
        }
      }

    case 'UPDATE_NOTE_GROUP':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload
        }
      }

    case 'DELETE_NOTE_GROUP':
      delete state[action.payload.id]
      return { ...state }

    default:
      return state
  }
}

export default noteGroups;
