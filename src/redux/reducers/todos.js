import { uuid } from "uuidv4";
import { omit } from "lodash";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constants/ActionTypes";

const todos = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      const newTodoId = uuid();
      const newState = {
        ...state,
        [newTodoId]: {
          id: newTodoId,
          name: payload.name,
          active: true
        }
      };
      return newState;
    case DELETE_TODO:
      return omit(state, payload.id);
    case EDIT_TODO:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          ...payload
        }
      };
    default:
      return state;
  }
};

export default todos;
