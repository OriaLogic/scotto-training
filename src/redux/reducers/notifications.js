
const initialState = {
  
  1: {
    id: 1,
    active: true,
    todo: {
      id: 1,
      name: "code all day long",
      todoListId: 1
    }
  },
  2:  {
    id: 2,
    active: false,
    todo: {
      id: 2,
      name: "pakaLolo all day long",
      todoListId: 2
    }
  },
  3:  {
    id: 3,
    active: true,
    todo: {
      id: 3,
      name: "plongée all day long",
      todoListId: 3
    }
  }

}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default notifications;
