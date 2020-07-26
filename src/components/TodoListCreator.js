import React from "react";

export default class TodoListCreator extends React.Component {
  state = {
    todoListTitle: "",
    adding: false
  };

  render() {
    const { adding, todoListTitle } = this.state;

    if (!adding) {
      return (
        <button
          className="button is-primary"
          onClick={() => this.setState({ adding: true })}
        >
          <span className="icon is-large">
            <i className="fas fa-plus-circle"></i>
          </span>
        </button>
      );
    }

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onCreate(todoListTitle);
          this.setState({ todoListTitle: "", adding: false });
        }}
      >
        <div className="field has-addons">
          <div className="control">
            <input
              autoFocus
              className="input"
              value={todoListTitle}
              onChange={e => this.setState({ todoListTitle: e.target.value })}
            />
          </div>

          <div className="control">
            <button className="button is-primary" type="submit">
              <span className="icon is-large">
                <i className="fas fa-check-circle"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
