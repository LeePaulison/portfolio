import { useLoaderData } from "react-router-dom";

export const ToDoItem = () => {
  const { todo } = useLoaderData();

  console.log("ToDoItem", todo);

  return (
    <div>
      <h1>ToDoItem</h1>
      {todo && (
        <div>
          <h2>{todo.id}</h2>
        </div>
      )}
    </div>
  );
};
