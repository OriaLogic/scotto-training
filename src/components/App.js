import React from "react";
import TodoList from "./TodoList";

// Small comment to open the PR
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
