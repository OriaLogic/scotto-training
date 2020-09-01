import React from "react";
import { values } from "lodash";
import TodoList from "./TodoList";
import TodoListCreationForm from "./TodoListCreationForm";
import Button from "./library/Button";
import { connect } from "react-redux";
import Preferences from "./Preferences";

// Small comment to open the PR (again)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <Button additionalClassName="save-data" onClick={this.props.saveData}>
          Save
        </Button>

        <div className="app-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }}
          >
            <TodoListCreationForm onCreate={this.props.addTodoList} />
            <Preferences />
          </div>

          <div className="all-todoLists-container">
            {this.props.todoLists.map(todoList => {
              return (
                <TodoList
                  key={todoList.id}
                  name={todoList.name}
                  onDelete={this.props.deleteTodoList}
                  id={todoList.id}
                  preferences={this.props.preferences}
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
    todoLists: values(state.todoLists)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addTodoList: name =>
      dispatch({
        type: "ADD_TODOLIST",
        payload: {
          name
        }
      }),
    deleteTodoList: todoListId =>
      dispatch({
        type: "DELETE_TODOLIST",
        payload: {
          todoListId
        }
      }),
    saveData: () =>
      dispatch({
        type: "SAVE_DATA"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
