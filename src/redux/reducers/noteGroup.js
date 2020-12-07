import { v4 as uuidv4 } from "uuid";

const initialState = {
  0: {
    id: 0,
    name: "Notes"
  }
};

const noteGroup = (state = initialState, action) => {
  let id

  switch (action.type) {
    case 'ADD_NOTE_GROUP' :
      id = uuidv4();
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name
        }
      }

    case 'DELETE_NOTE_GROUP' :
      delete state[action.payload.noteGroupId]
      return { ...state }

    default:
      return state
  }
}

export default noteGroup;
