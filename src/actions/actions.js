// react-router-dom
import { redirect } from "react-router-dom";
// resolvers are imported here and called to perform the action
import { createToDo, updateToDo } from "../resolvers";

export async function createToDoAction() {
  const todo = await createToDo();
  return redirect(`/projects/todo/${todo.id}/edit`);
}

export async function updateToDoAction({ params, request }) {
  console.log("params: ", params);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log("updates: ", updates);
  await updateToDo(params.todoId, updates);
  return redirect(`/projects/todo/:todoId`);
}