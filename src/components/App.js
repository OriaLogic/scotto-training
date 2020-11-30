import React from "react";

import { Switch, Route } from "react-router-dom";

import AppLayout from "./AppLayout";
import Notes from "./pages/Notes";
import Todos from "./pages/Todos";

export default function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/notes" component={Notes} />
        <Route path="/todos" component={Todos} />
        <Route path="/" component={Todos} />
      </Switch>
    </AppLayout>
  );
}
