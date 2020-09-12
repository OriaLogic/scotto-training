
const initialState = {
  filter: "ALL",
  sortBy: "NAME"
}

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
    return {
      ...state,
      filter: action.payload.filter
    };

    case 'CHANGE_SORT_BY' :
    return {
      ...state,
      sortBy: action.payload.sortBy
    }

    default:
      return state
  }
}

export default userPreferences;
