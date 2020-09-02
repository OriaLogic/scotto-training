
const initialState = {
  filter: "ALL"
}

const userPreferences = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
    console.log(action.payload)
    return {
      ...state,
      filter: action.payload.filter}

    default:
      return state
  }
}

export default userPreferences;
