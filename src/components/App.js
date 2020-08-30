import React from "react";
import { values } from "lodash";
import TodoList from "./TodoList";
import TodoListCreationForm from "./TodoListCreationForm";
import Button from "./Library/Button";
import { connect } from "react-redux";

// Small comment to open the PR (again)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
          <Button
            className="button save-data"
            name="Save"
            onClick={this.props.saveData}
          />
        <div className="app-container">
          <TodoListCreationForm onCreate={this.props.addTodoList}/>
          <div className="all-todoLists-container">
            {this.props.todoLists.map((todoList) => {
              return (
                <TodoList
                  key={todoList.id}
                  name={todoList.name}
                  onDelete={this.props.deleteTodoList}
                  id={todoList.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoLists: values(state)
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
    }),
    saveData: () => dispatch({
      type: 'SAVE_DATA'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
