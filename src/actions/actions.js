// react-router-dom
import { redirect } from "react-router-dom";
// resolvers are imported here and called to perform the action
import { createToDo, updateToDo, deleteToDo } from "../resolvers";

export async function createToDoAction({ request }) {
  const formData = await request.formData();
  const content = Object.fromEntries(formData);
  const todo = await createToDo(content);
  return redirect(`/todolist/${todo.id}`);
}

export async function updateToDoAction({ params, request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateToDo(params.todoId, updates);
  return redirect(`/todolist`);
}

export async function deleteToDoAction({ params }) {
  await deleteToDo(params.todoId);
  return redirect(`/todolist`);
}
