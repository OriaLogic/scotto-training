import UserController from "./controllers/users";
import TodoListController from "./controllers/todoLists";
import TodoController from "./controllers/todos";
import db from "./db";

import express from "express";
const app = express();
const port = 3001;

app.resource = function(path, controller) {
  console.log(`Attaching resource controller to ${path}`);
  this.get(path, controller.index);
  this.get(`${path}/:id`, controller.show);
  this.delete(`${path}/:id`, controller.destroy);
  this.put(`${path}/:id`, controller.update);
  this.post(`${path}`, controller.create);
};

app.resource("/users", UserController);
app.resource("/todoLists", TodoListController);
app.resource("/todos", TodoController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  console.log(`Received request to path ${req.path}`);
  res.send("Unrecognized path");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
