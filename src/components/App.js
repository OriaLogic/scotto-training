import React from "react";
import TodoList from "./TodoList";

// Small comment to open the PR
class App extends React.Component {
  state = {
    todoLists: [{id: 1, name: "List 1"}, {id: 2, name: "List 2"}]
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <div className="app-container">
          <h2 style={{ marginBottom: 30 }}>Number of lists: {this.state.todoLists.length}</h2>
          <div className="all-todoLists-container">
            <TodoList name={this.state.todoLists[0].name} />
            <TodoList name={this.state.todoLists[1].name} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
