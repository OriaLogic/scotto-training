import { v4 as uuidv4 } from "uuid";
const initialState = {};

const notifications = (state = initialState, action) => {
  const { type, payload } = action;
  let id;

  switch (type) {
    case "ADD_NOTIFICATION":
      id = uuidv4();
      return {
        ...state,
        [id]: {
          id: id,
          active: true,
          ...payload
        }
      };

    case "DISMISS_NOTIFICATION":
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          active: false
        }
      };

    default:
      return state;
  }
};

export default notifications;
