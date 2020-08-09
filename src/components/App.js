import React from "react";
import { values } from "lodash";
import { connect } from "react-redux";

import { addTodoList } from "../redux/actions/todoList";

import TodoList from "./TodoList";

// Small comment to open the PR
class App extends React.Component {
  state = {
    newTodoListName: ""
  };

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <div className="app-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.state.newTodoListName === "") return;
              this.props.createTodoList(this.state.newTodoListName);
              this.setState({ newTodoListName: "" });
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
            {this.props.todoLists.map(todoList => {
              return <TodoList todoList={todoList} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoLists: values(state.todoLists)
});

const mapDispatchToProps = dispatch => ({
  createTodoList: name => dispatch(addTodoList(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
