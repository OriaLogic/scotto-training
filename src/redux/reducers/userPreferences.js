
const initialState = {
  filter: "ALL"
}

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
    return {
      filter: action.payload.filter
    };

    default:
      return state
  }
}

export default userPreferences;
