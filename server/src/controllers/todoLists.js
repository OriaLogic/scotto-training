import TodoList from "../resources/TodoList";
import resourceControllerGenerator from "./resourceControllerGenerator";

export default resourceControllerGenerator({
  resourceName: "todoList",
  ResourceClass: TodoList
});
