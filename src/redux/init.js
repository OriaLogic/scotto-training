export const getInitialState = () => {
  const storedState = JSON.parse(localStorage.getItem("dataState"));
  const todoListsState = storedState.todoLists;

  Object.keys(todoListsState).forEach(todoListId => {
    const todoList = todoListsState[todoListId];
    const todos = todoList.todos;

    Object.keys(todos).forEach(todoId => {
      const todo = todos[todoId];
      todo.dueDate = new Date(todo.dueDate);
    })
  })

  const initialState = {
    todoLists: todoListsState,
    userPreferences: storedState.userPreferences,
    notifications: { }
  }

  return initialState
};

export const afterStoreInitialization = store => {
  setTimeout(() => triggerNotifications(store), 5000);
};

const triggerNotifications = store => {
    const todoListsState = store.getState().todoLists;

    Object.keys(todoListsState).forEach(todoListId => {
      const todoList = todoListsState[todoListId];
      const todos = todoList.todos;

      Object.keys(todos).forEach(todoId => {
        const todo = todos[todoId];
        if (todo.active && todo.dueDate < new Date()) {
          store.dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
              todo,
              todoListId
            }
          })
        }
      })
    })

};
