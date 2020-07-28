import React from "react";

export default class TodoCreationForm extends React.Component {
  state = {
    taskName: ""
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onCreate(this.state.taskName)
          this.setState({taskName: ""})
        }}
      >
        <input
          autoFocus
          value={this.state.taskName}
          onChange={e => this.setState({taskName: e.target.value})}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
