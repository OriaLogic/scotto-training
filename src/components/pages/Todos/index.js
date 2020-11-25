import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import UserPreferences from "./UserPreferences";
import TodoListCreationForm from "./TodoListCreationForm";

export function Todos({ todoLists, addTodoList, deleteTodoList }) {
  return (
    <React.Fragment>
      <div className="bloc-1">
        <UserPreferences/>
        <TodoListCreationForm onCreate={addTodoList}/>
      </div>

      <div className="all-todoLists-container">
        {todoLists.map((todoList) => {
          return (
            <TodoList
              key={todoList.id}
              name={todoList.name}
              onDelete={deleteTodoList}
              id={todoList.id}
            />
          );
        })}
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state, props) => {
  return {
    todoLists: values(state.todoLists)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTodoList: (name) => dispatch({
      type: 'ADD_TODOLIST',
      payload: {
        name
      }
    }),
    deleteTodoList: (todoListId) => dispatch({
      type: 'DELETE_TODOLIST',
      payload: {
        todoListId
      }
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
