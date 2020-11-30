import React from "react";

import NotificationCenter from "../NotificationCenter";
import Header from "./Header";

export default function AppLayout({ children }) {
  return (
    <div className="App">
      <Header />

      <NotificationCenter />

      <div className="app-container">{children}</div>
    </div>
  );
}
