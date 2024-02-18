// react-router-dom
import { redirect } from "react-router-dom";
// resolvers are imported here and called to perform the action
import { createToDo } from "../resolvers";

export async function createToDoAction() {
  const todo = await createToDo();
  return redirect(`/projects/todo/${todo.id}/edit`);
}
