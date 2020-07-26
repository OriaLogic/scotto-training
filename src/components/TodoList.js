import React from "react";
import { updateObjectInList } from "../util/array";
import TodoCreationForm from "./TodoCreationForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    list: [],
    editingTodoId: null
  };

  deleteTodo = todoToDeleteId => {
    const newList = this.state.list.filter(todo => todo.id !== todoToDeleteId);
    this.setState({ list: newList });
  };

  createNewTodo = name => {
    if (this.state.list.length === 0) {
      this.setState({
        list: [{ id: 1, name, active: true }]
      });
      return;
    }

    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list[this.state.list.length - 1].id + 1,
          name,
          active: true
        }
      ]
    });
  };

  editTodo = todo => {
    this.setState({
      editingTodoId: todo.id
    });
  };

  updateTodo = (todoId, name) => {
    this.setState({
      list: updateObjectInList(this.state.list, todoId, { name }),
      editingTodoId: null
    });
  };

  toggleTodo = todo => {
    this.setState({
      list: updateObjectInList(this.state.list, todo.id, {
        active: !todo.active
      }),
      editingTodoId: null
    });
  };

  render() {
    return (
      <div
        className="TodoList"
        style={{
          height: 500
        }}
      >
        <h2>
          To Do List ({this.state.list.filter(todo => todo.active).length}):
        </h2>
        <TodoCreationForm onCreate={this.createNewTodo} />
        <ul>
          {this.state.list.map(todo => {
            return (
              <li>
                <Todo
                  todo={todo}
                  editing={this.state.editingTodoId === todo.id}
                  todo={todo}
                  toggleTodoActivation={this.toggleTodo}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                  updateTodo={this.updateTodo}
                  stopEditTodo={() => this.setState({ editingTodoId: null })}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
