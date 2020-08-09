const initialState = {
  filter: "ALL",
  sortByField: "DUE_DATE",
  sortByDirection: "ASC"
};

const todoLists = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_PREFERENCES":
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default todoLists;
