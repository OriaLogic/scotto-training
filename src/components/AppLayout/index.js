import React from "react";
import Header from "./Header";
import NotificationCenter from "../NotificationCenter";

export default class AppLayout extends React.Component {
  render() {
    <div className="App">

      <Header />
      <NotificationCenter />

      <div className="app-container">
        {this.props.children}
      </div>

    </div>
  }
}
