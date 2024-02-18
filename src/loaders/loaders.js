import { getAllTodos, getTodoById } from "../resolvers";

export async function allToDoLoader() {
  const list = await getAllTodos();
  return { list };
}

export async function todoLoader({ params }) {
  console.log("Params", params);

  const todo = await getTodoById(params.todoId);
  return { todo };
}
