import React from "react";
import { values } from "lodash";
import TodoList from "./TodoList";
import { connect } from "react-redux";

// Small comment to open the PR (again)
class App extends React.Component {
  state = {
    newTodoListName: ""
  };

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <button
          id="save-data-button"
          className="button is-normal"
          onClick={this.props.saveData}
        >
          Save
        </button>
        <div className="app-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.state.newTodoListName === "") return;
              this.props.addTodoList(this.state.newTodoListName);
              this.setState({newTodoListName: ""})
            }}
          >
            <input
              className="input is-primary is-normal"
              autoFocus
              placeholder="Add a TodoList"
              value={this.state.newTodoListName}
              onChange={e => this.setState({ newTodoListName: e.target.value })}
            />
            <button
              className="button is-normal is-primary"
              style={{ marginLeft: 10 }}
              type="submit"
              disabled={this.state.newTodoListName === ""}
            >
              Submit
            </button>
          </form>
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
