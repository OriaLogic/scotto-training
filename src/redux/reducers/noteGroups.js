import { v4 as uuidv4 } from "uuid";
import { omit } from "lodash";

const initialState = {
  0: {
    id: 0,
    name: "Notes"
  }
};

const noteGroups = (state = initialState, { type, payload }) => {
  let id;

  switch (type) {
    case "ADD_NOTE_GROUP":
      id = uuidv4();

      return {
        ...state,
        [id]: {
          id,
          name: payload.name || "Nouveau dossier"
        }
      };

    case "UPDATE_NOTE_GROUP":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload
        }
      };

    case "DELETE_NOTE_GROUP":
      id = payload.id;

      return omit(state, payload.id);

    default:
      return state;
  }
};

export default noteGroups;
