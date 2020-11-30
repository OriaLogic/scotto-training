import { v4 as uuidv4 } from "uuid";
import { omit } from "lodash";

const initialState = {};

const notes = (state = initialState, { type, payload }) => {
  let id;

  switch (type) {
    case "ADD_NOTE":
      id = uuidv4();

      return {
        ...state,
        [id]: {
          id,
          ...payload,
          title: payload.title || "Nouvelle note",
          content: ""
        }
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload
        }
      };

    case "DELETE_NOTE":
      id = payload.id;

      return omit(state, payload.id);

    default:
      return state;
  }
};

export default notes;
