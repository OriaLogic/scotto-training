import User from "./resources/users.js";
import TodoList from "./resources/users.js";
import Todo from "./resources/users.js";

import express from "express";
const app = express();
const port = 3001;

app.resource = function(path, controller) {
  this.get(path, controller.index);
  this.get(`${path}/:id`, controller.show);
  this.delete(`${path}/:id`, controller.destroy);
  this.put(`${path}/:id`, controller.update);
  this.post(`${path}`, controller.create);
};

app.resource("/users", User);
app.resource("/todoLists", TodoList);
app.resource("/todos", Todo);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
