import User from "../resources/User";
import resourceControllerGenerator from "./resourceControllerGenerator";

export default resourceControllerGenerator({
  resourceName: "user",
  ResourceClass: User
});
