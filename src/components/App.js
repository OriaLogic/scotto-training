import React from "react";
import { v4 as uuid } from "uuid";
import { times } from "lodash";

import TodoList from "./TodoList";
import TodoListCreator from "./TodoListCreator";
import TodoListEmptyCard from "./TodoListEmptyCard";

const MAX_TODO_LIST = 10;

// Small comment to open the PR
class App extends React.Component {
  state = {
    todoLists: [{ title: "Basic", id: 0 }]
  };

  createTodoList = title =>
    this.setState({
      todoLists: [...this.state.todoLists, { id: uuid(), title }]
    });

  deleteTodoList = id =>
    this.setState({
      todoLists: this.state.todoLists.filter(todoList => todoList.id !== id)
    });

  render() {
    const { todoLists } = this.state;

    return (
      <div className="App">
        <h1 className="main-title">Scotto TodoList App !</h1>

        <div className="app-content">
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: 20
            }}
          >
            <TodoListCreator onCreate={this.createTodoList} />
          </div>

          {todoLists.length > 0 ? (
            <div className="todo-list-global-container">
              {todoLists.map(todoList => (
                <TodoList
                  title={todoList.title}
                  id={todoList.id}
                  onDelete={this.deleteTodoList}
                />
              ))}
              {times(MAX_TODO_LIST - todoLists.length, () => (
                <TodoListEmptyCard />
              ))}
            </div>
          ) : (
            <div className="todo-list-placeholder">
              {times(MAX_TODO_LIST, () => (
                <TodoListEmptyCard />
              ))}
              <div className="overlay">
                <div className="titles">
                  <h3 className="title is-3">No todo list yet</h3>
                  <h3 className="subtitle is-3">
                    To start using the app, create a first todo list
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
