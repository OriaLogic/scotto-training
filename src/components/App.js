import React from "react";
import { values } from "lodash";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodoList } from "../redux/actions/todoList";

// Small comment to open the PR
class App extends React.Component {
  state = {
    todoLists: [],
    newTodoListName: ""
  }

  createTodoList = () => {
    if (this.state.todoLists.length === 0) {
      this.setState({
        todoLists: [{ id: 1, name: this.state.newTodoListName}],
      });
      return;
    }

      this.setState({
        todoLists: [
          ...this.state.todoLists,
          {
            id: this.state.todoLists[this.state.todoLists.length - 1].id + 1,
            name: this.state.newTodoListName
          }
        ]
    });
  }

  deleteTodoList = (todoListId) => {
    const newTodoLists = this.state.todoLists.filter((todoList) => todoList.id !== todoListId )
    this.setState({
      todoLists: newTodoLists
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
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
              onChange={e => this.setState({newTodoListName: e.target.value})}
            />
            <button className="button is-normal is-primary" style={{marginLeft: 10}} type="submit" disabled={this.state.newTodoListName === ""}>Submit</button>
          </form>
          <div className="all-todoLists-container">
            {this.props.todoLists.map((todoList) => {
              return (
                <TodoList
                  key={todoList.id}
                  name={todoList.name}
                  onDelete={this.deleteTodoList}
                  id={todoList.id}
                  />
              )
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
    addTodoList: (name) => dispatch(addTodoList(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
