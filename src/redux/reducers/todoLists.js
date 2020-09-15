import { v4 as uuidv4 } from "uuid";

const initialState = {
  0: {
     id: 0,
     name: "General todolist",
     todos: {
       0: {
         id: 0,
         name: "First todo",
         dueDate: new Date(),
         active: true
       }
     }
  }
}

const todoLists = (state = initialState, action) => {
  let id, todoListId, todoId;
  let todoList, todos, todo;

  switch (action.type) {
    case 'ADD_TODOLIST':
      id = uuidv4();
      return {
        ...state,
        [id]: {
          id,
          name: action.payload.name,
          todos: {}
        }
      }

    case 'DELETE_TODOLIST':
      delete state[action.payload.todoListId]
      return { ...state }

    case 'ADD_TODO':
      id = uuidv4();
      todoListId = action.payload.todoListId;
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
              dueDate: action.payload.dueDate,
              active: true
            }
          }
        }
      }

    case 'DELETE_TODO':
      todoId = action.payload.todoId
      todoListId = action.payload.todoListId

      todoList = state[todoListId]
      todos = todoList.todos;
      delete todos[todoId]

      return {
        ...state,
        [todoListId]: {
          ...todoList,
          todos: { ...todos }
        }
      }

    case 'UPDATE_TODO':
      todoId = action.payload.todoId
      todoListId = action.payload.todoListId
      const updatedKeysInTodo = action.payload.updatedKeysInTodo

      todoList = state[todoListId]
      todos = todoList.todos
      todo = todos[todoId]

      return {
        ...state,
        [todoListId]: {
          ...todoList,
          todos: {
            ...todos,
            [todoId]: {
              ...todo,
              ...updatedKeysInTodo
            }
          }
        }
      }

    case 'SAVE_DATA':
      localStorage.setItem('dataState', JSON.stringify(state))
      return state

    default:
      return state
  }
}

export default todoLists;
