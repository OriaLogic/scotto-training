import { SAVE_DATA } from "../../constants/ActionTypes";

export * from "./todo";
export * from "./todoList";

export const saveData = () => ({
  type: SAVE_DATA
});
