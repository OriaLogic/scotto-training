import Todo from "../resources/Todo";
import resourceControllerGenerator from "./resourceControllerGenerator";

export default resourceControllerGenerator({
  resourceName: "todo",
  ResourceClass: Todo
});
