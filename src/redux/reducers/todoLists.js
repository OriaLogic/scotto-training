import { newId } from "../../util/id"

const initialState = {
  0: {
     id: 0,
     name: "General todolist",
     todos: {
       0: {
         id: 0,
         name: "First todo",
         active: true
       }
     }
  }
}

const todoLists = (state = initialState, action) => {
  let id, todoListId, todoList, todoId;

  switch (action.type) {
    case 'ADD_TODOLIST':
      id = newId();
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name,
          todos: {}
        }
      };

    case 'DELETE_TODOLIST':
      delete state[action.payload.todoListId]
      return { ...state };

    case 'ADD_TODO':
      id = newId();
      todoListId = action.payload.todoListId
      todoList = state[todoListId]

      return {
        ...state,
        [todoListId]: {
          ...todoList,
          todos: {
            ...todoList.todos,
            [id]: {
              id,
              name: action.payload.newTodoName,
              active: true
            }
          }
        }
      }

    case 'DELETE_TODO':
      todoId = action.payload.todoId
      todoListId = action.payload.todoListId

      const todoList = state[todoListId]
      const todos = todoList.todos;
      delete todos[todoId]

      return {
        ...state,
        [todoListId]: {
          ...todoList,
          todos: { ...todos }
        }
      }

    default:
      return state
  }
}

export default todoLists;
