import React from "react";
import TodoList from "./TodoList";

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

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <div className="app-container">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (this.state.newTodoListName === "") return;
              this.createTodoList();
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
            {this.state.todoLists.map((todoList) => {
              return (
                <TodoList name={todoList.name}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
